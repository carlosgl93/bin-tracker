// Formats a number to the format 3.000,05 (thousand separator: dot, decimal separator: comma)
export function formatNumberES(value: number | string): string {
  if (value === null || value === undefined || value === '') return '';
  const number = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(number)) return '';
  return number.toLocaleString('es-ES', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
