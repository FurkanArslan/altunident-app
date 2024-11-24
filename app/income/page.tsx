"use client";

import { IncomeHeader } from "@/components/income/header";
import { IncomeList } from "@/components/income/list";
import { AddIncomeButton } from "@/components/income/add-button";
import { IncomeCharts } from "@/components/income/charts";

export default function IncomePage() {
  return (
    <div className="flex flex-col gap-8">
      <IncomeHeader />
      <div className="flex justify-end">
        <AddIncomeButton />
      </div>
      <IncomeCharts />
      <IncomeList />
    </div>
  );
}