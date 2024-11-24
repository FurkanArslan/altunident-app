import { CalendarDateRangePicker } from "@/components/date-range-picker";

export function ExpenseHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
        <p className="text-muted-foreground">
          Track and manage clinic expenses
        </p>
      </div>
      <CalendarDateRangePicker />
    </div>
  );
}