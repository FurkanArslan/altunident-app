"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const monthlyData = [
  { month: "Jan", revenue: 24500, expenses: 12000, profit: 12500, margin: 51 },
  { month: "Feb", revenue: 28900, expenses: 13400, profit: 15500, margin: 54 },
  { month: "Mar", revenue: 32400, expenses: 14800, profit: 17600, margin: 54 },
  { month: "Apr", revenue: 35700, expenses: 15200, profit: 20500, margin: 57 },
  { month: "May", revenue: 39200, expenses: 16500, profit: 22700, margin: 58 },
  { month: "Jun", revenue: 42800, expenses: 17100, profit: 25700, margin: 60 },
];

const serviceData = [
  { name: "Root Canal", revenue: 12000, cost: 4800, profit: 7200, margin: 60 },
  { name: "Cleaning", revenue: 8000, cost: 2400, profit: 5600, margin: 70 },
  { name: "Crown", revenue: 15000, cost: 6750, profit: 8250, margin: 55 },
  { name: "Extraction", revenue: 6000, cost: 1800, profit: 4200, margin: 70 },
  { name: "Filling", revenue: 9000, cost: 2700, profit: 6300, margin: 70 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string; color: string }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-lg shadow-lg p-2">
        <p className="text-sm font-medium">{label}</p>
        {payload.map((item) => (
          <p
            key={item.dataKey}
            className="text-sm text-muted-foreground"
            style={{ color: item.color }}
          >
            {item.dataKey.charAt(0).toUpperCase() + item.dataKey.slice(1)}:{" "}
            {item.dataKey === "margin" ? `${item.value}%` : `$${item.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ProfitabilityAnalysis() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Profitability Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="monthly">Monthly Analysis</TabsTrigger>
            <TabsTrigger value="service">By Service</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly" className="space-y-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" yAxisId="left" />
                  <Bar dataKey="expenses" fill="hsl(var(--destructive))" yAxisId="left" />
                  <Bar dataKey="profit" fill="hsl(var(--chart-1))" yAxisId="left" />
                  <Bar dataKey="margin" fill="hsl(var(--chart-2))" yAxisId="right" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="service" className="space-y-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={serviceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" yAxisId="left" />
                  <Bar dataKey="cost" fill="hsl(var(--destructive))" yAxisId="left" />
                  <Bar dataKey="profit" fill="hsl(var(--chart-1))" yAxisId="left" />
                  <Bar dataKey="margin" fill="hsl(var(--chart-2))" yAxisId="right" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}</boltArtifact>

<boltArtifact id="update-reports-page" title="Update Reports Page">
<boltAction type="file" filePath="app/reports/page.tsx">"use client";

import { ReportsHeader } from "@/components/reports/header";
import { FinancialSummary } from "@/components/reports/financial-summary";
import { TrendAnalysis } from "@/components/reports/trend-analysis";
import { CategoryBreakdown } from "@/components/reports/category-breakdown";
import { ProfitabilityAnalysis } from "@/components/reports/profitability-analysis";

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-8">
      <ReportsHeader />
      <FinancialSummary />
      <ProfitabilityAnalysis />
      <div className="grid gap-6 md:grid-cols-2">
        <TrendAnalysis />
        <CategoryBreakdown />
      </div>
    </div>
  );
}