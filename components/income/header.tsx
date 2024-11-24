import { CalendarDateRangePicker } from "@/components/date-range-picker";

export function IncomeHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Income</h1>
        <p className="text-muted-foreground">
          Manage and track your clinic's income
        </p>
      </div>
      <CalendarDateRangePicker />
    </div>
  );
}