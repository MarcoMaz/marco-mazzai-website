export type PartialDate = Date | 'Present' | string;

const monthName = (m: number) =>
  new Date(2000, m - 1, 1).toLocaleString('en-GB', { month: 'long' });

const formatPartialDate = (v: PartialDate | undefined): string => {
  if (v === 'Present') return 'Present';
  if (!v) return '';

  if (v instanceof Date) {
    return v.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  // v is string at this point (numbers were coerced)
  if (/^\d{4}$/.test(v)) return v; // "2024"

  const ym = v.match(/^(\d{4})-(\d{2})$/);
  if (ym) {
    const [, y, m] = ym;
    return `${monthName(Number(m))} ${y}`; // "July 2024"
  }

  const ymd = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (ymd) {
    const d = new Date(v);
    return d.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return String(v); // fallback
};

export const formatDateRange = (from: PartialDate, to?: PartialDate): string => {
  const start = formatPartialDate(from);
  const end = formatPartialDate(to);

  // Normalize both values to plain strings for comparison
  const same = start === end || !end;

  if (same) return start; // show only one
  return `${start} – ${end}`;
};
