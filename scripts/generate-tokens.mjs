// Generates src/styles/tokens/generated.scss from the resolved token JSON
// published in @irenecvg/mm-design-tokens. Run via `npm run tokens:generate`
// (also wired into predev/prebuild). Do not hand-edit the generated file —
// change the source package and regenerate instead.
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const tokensPath = require.resolve("@irenecvg/mm-design-tokens/build/tokens.json");
const tokens = JSON.parse(readFileSync(tokensPath, "utf-8"));

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "../src/styles/tokens/generated.scss");

// A dimension of 0 stays a bare `0` (matches the hand-authored source this
// replaces); everything else goes through utils.scss's rem() at build time.
const dim = (px) => (px === 0 ? "0" : `#{rem(${px})}`);
const raw = (v) => `${v}`;
const quoted = (v) => `"${v}"`;

const root = [];
const tablet = [];
const desktop = [];

// ---- Brand primitives: color ----
for (const [family, shades] of Object.entries(tokens.color)) {
  for (const [shade, hex] of Object.entries(shades)) {
    root.push(`  --color-${family}${shade}: ${hex};`);
  }
}

// ---- Brand primitives: fonts ----
root.push(`  --fonts-headings-style-tanker: ${quoted(tokens.font.headings.style.tanker)};`);
root.push(`  --fonts-headings-weight-regular: ${raw(tokens.font.headings.weight.regular)};`);
root.push(
  `  --fonts-paragraph-style-space-grotesk: ${quoted(tokens.font.paragraph.style["space-grotesk"])};`,
);
root.push(`  --fonts-paragraph-weight-regular: ${raw(tokens.font.paragraph.weight.regular)};`);
root.push(`  --fonts-paragraph-weight-medium: ${raw(tokens.font.paragraph.weight.medium)};`);
root.push(`  --fonts-paragraph-weight-bold: ${raw(tokens.font.paragraph.weight.bold)};`);

// ---- Brand primitives: scale ----
for (const [key, px] of Object.entries(tokens.scale)) {
  root.push(`  --scale${key}: ${dim(px)};`);
}

// ---- Alias: primary / error / success / warning (100-400, default, 600-900) ----
for (const group of ["primary", "error", "success", "warning"]) {
  for (const key of ["100", "200", "300", "400", "default", "600", "700", "800", "900"]) {
    root.push(`  --${group}-${key}: ${tokens[group][key]};`);
  }
}

// ---- Alias: information (100-900, no "default") ----
for (const key of ["100", "200", "300", "400", "500", "600", "700", "800", "900"]) {
  root.push(`  --information-${key}: ${tokens.information[key]};`);
}

// ---- Alias: neutral (100-400, default, 600-800, black, white) ----
for (const key of ["100", "200", "300", "400", "default", "600", "700", "800", "black", "white"]) {
  root.push(`  --neutral-${key}: ${tokens.neutral[key]};`);
}

// ---- Alias: border-width / border-radius ----
for (const [key, px] of Object.entries(tokens["border-width"])) {
  root.push(`  --border-width-${key}: ${dim(px)};`);
}
for (const [key, px] of Object.entries(tokens["border-radius"])) {
  root.push(`  --border-radius-${key}: ${dim(px)};`);
}

// ---- Alias: font-primary / font-secondary ----
root.push(`  --fonts-primary: ${quoted(tokens.font.primary)};`);
root.push(`  --fonts-secondary: ${quoted(tokens.font.secondary)};`);

// ---- Mapped: text / icons / surface / border ----
for (const group of ["text", "icons", "surface", "border"]) {
  for (const [key, hex] of Object.entries(tokens[group])) {
    root.push(`  --${group}-${key}: ${hex};`);
  }
}

// ---- Responsive: typography ----
for (const [name, props] of Object.entries(tokens.typography)) {
  for (const [prop, breakpoints] of Object.entries(props)) {
    const varName = `--typography-${name}-${prop}`;
    if ("mobile" in breakpoints) root.push(`  ${varName}: ${dim(breakpoints.mobile)};`);
    if ("tablet" in breakpoints) tablet.push(`    ${varName}: ${dim(breakpoints.tablet)};`);
    if ("desktop" in breakpoints) desktop.push(`    ${varName}: ${dim(breakpoints.desktop)};`);
  }
}

// ---- Responsive: layout (grid.columns/tablet/desktop are bare counts, not dimensions) ----
for (const [group, props] of Object.entries(tokens.layout)) {
  for (const [prop, breakpoints] of Object.entries(props)) {
    const varName = `--layout-${group}-${prop}`;
    const isCount = group === "grid" && prop === "columns";
    const fmt = isCount ? raw : dim;
    if ("mobile" in breakpoints) root.push(`  ${varName}: ${fmt(breakpoints.mobile)};`);
    if ("tablet" in breakpoints) tablet.push(`    ${varName}: ${fmt(breakpoints.tablet)};`);
    if ("desktop" in breakpoints) desktop.push(`    ${varName}: ${fmt(breakpoints.desktop)};`);
  }
}

// ---- SCSS $variable wrappers (mirrors the old tokens/mapped.scss surface) ----
const dollarVars = [];
for (const group of ["primary", "error", "success", "warning"]) {
  for (const key of ["100", "200", "300", "400", "default", "600", "700", "800", "900"]) {
    dollarVars.push(`$${group}-${key}: var(--${group}-${key});`);
  }
}
for (const key of ["100", "200", "300", "400", "500", "600", "700", "800", "900"]) {
  dollarVars.push(`$information-${key}: var(--information-${key});`);
}
for (const key of ["100", "200", "300", "400", "default", "600", "700", "800", "black", "white"]) {
  dollarVars.push(`$neutral-${key}: var(--neutral-${key});`);
}
for (const key of Object.keys(tokens["border-width"])) {
  dollarVars.push(`$border-width-${key}: var(--border-width-${key});`);
}
for (const key of Object.keys(tokens["border-radius"])) {
  dollarVars.push(`$border-radius-${key}: var(--border-radius-${key});`);
}
dollarVars.push(`$fonts-primary: var(--fonts-primary);`);
dollarVars.push(`$fonts-secondary: var(--fonts-secondary);`);
for (const group of ["text", "icons", "surface", "border"]) {
  for (const key of Object.keys(tokens[group])) {
    dollarVars.push(`$${group}-${key}: var(--${group}-${key});`);
  }
}

const out = `// GENERATED FILE — do not edit directly.
// Source: @irenecvg/mm-design-tokens. Regenerate with \`npm run tokens:generate\`.
@use "../utils" as *;

:root {
${root.join("\n")}
}

@media (min-width: 768px) {
  :root {
${tablet.join("\n")}
  }
}

@media (min-width: 1024px) {
  :root {
${desktop.join("\n")}
  }
}

${dollarVars.join("\n")}
`;

writeFileSync(outPath, out);
console.log(`Generated ${outPath}`);
