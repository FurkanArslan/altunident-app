import { CalendarDateRangePicker } from "@/components/date-range-picker";

export function ReportsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Analyze financial performance and trends
        </p>
      </div>
      <CalendarDateRangePicker />
    </div>
  );
}