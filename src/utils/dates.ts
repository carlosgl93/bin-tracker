import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export function formatDate(dateStr: string): string {
  // Create date from string and handle timezone offset to avoid date shifting
  if (!dateStr) return '';
  const [year, month, day] = (dateStr || '').split('-').map(Number);
  // Month is 0-indexed in JavaScript Date
  const date = new Date(year, month - 1, day);
  return format(date, "EEEE, d 'de' MMMM, yyyy", { locale: es });
}
