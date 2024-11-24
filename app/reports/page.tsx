"use client";

import { ReportsHeader } from "@/components/reports/header";
import { FinancialSummary } from "@/components/reports/financial-summary";
import { TrendAnalysis } from "@/components/reports/trend-analysis";
import { CategoryBreakdown } from "@/components/reports/category-breakdown";

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-8">
      <ReportsHeader />
      <FinancialSummary />
      <div className="grid gap-6 md:grid-cols-2">
        <TrendAnalysis />
        <CategoryBreakdown />
      </div>
    </div>
  );
}