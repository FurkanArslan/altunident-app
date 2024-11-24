import { CalendarDateRangePicker } from "@/components/date-range-picker";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your clinic's financial performance
        </p>
      </div>
      <CalendarDateRangePicker />
    </div>
  );
}