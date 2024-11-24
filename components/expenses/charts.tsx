"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const monthlyData = [
  { name: "Jan", expenses: 8400 },
  { name: "Feb", expenses: 7398 },
  { name: "Mar", expenses: 9800 },
  { name: "Apr", expenses: 8908 },
  { name: "May", expenses: 7800 },
  { name: "Jun", expenses: 8800 },
  { name: "Jul", expenses: 9300 },
  { name: "Aug", expenses: 8500 },
  { name: "Sep", expenses: 9100 },
  { name: "Oct", expenses: 8700 },
  { name: "Nov", expenses: 9400 },
  { name: "Dec", expenses: 8900 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-lg shadow-lg p-2">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const chartConfig = {
  xAxis: {
    stroke: "hsl(var(--muted-foreground))",
    fontSize: 12,
    tickLine: false,
    axisLine: false,
  },
  yAxis: {
    stroke: "hsl(var(--muted-foreground))",
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    tickFormatter: (value: number) => `$${value}`,
  },
};

export function ExpenseCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Expenses Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <XAxis dataKey="name" {...chartConfig.xAxis} />
              <YAxis {...chartConfig.yAxis} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}