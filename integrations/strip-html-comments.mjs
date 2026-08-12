import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

/**
 * Strips HTML comments (`<!-- ... -->`) from built .html files.
 * Source templates keep their comments; only the emitted output is scrubbed.
 */
export default function stripHtmlComments() {
  return {
    name: "strip-html-comments",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const entries = await readdir(outDir, {
          recursive: true,
          withFileTypes: true,
        });

        const htmlFiles = entries
          .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
          .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name));

        await Promise.all(
          htmlFiles.map(async (filePath) => {
            const html = await readFile(filePath, "utf-8");
            const stripped = html.replace(/<!--[\s\S]*?-->/g, "");
            if (stripped !== html) {
              await writeFile(filePath, stripped, "utf-8");
            }
          }),
        );
      },
    },
  };
}
