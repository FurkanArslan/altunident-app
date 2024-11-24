import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { startOfMonth, endOfMonth } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentMonthRange() {
  const now = new Date();
  return {
    from: startOfMonth(now),
    to: endOfMonth(now),
  };
}

export function isWithinDateRange(date: Date, range: { from: Date; to: Date }) {
  return date >= range.from && date <= range.to;
}

export function filterDataByDateRange<T extends { date: string }>(
  data: T[],
  dateRange: { from: Date; to: Date }
): T[] {
  return data.filter((item) => {
    const itemDate = new Date(item.date);
    return isWithinDateRange(itemDate, dateRange);
  });
}