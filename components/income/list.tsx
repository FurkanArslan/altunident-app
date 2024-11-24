"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { filterDataByDateRange, getCurrentMonthRange } from "@/lib/utils";
import { DateRange } from "react-day-picker";

const allIncomes = [
  {
    id: "1",
    date: "2024-02-15",
    patientName: "John Doe",
    serviceType: "Root Canal",
    amount: 850.00,
    paymentMethod: "Credit Card",
    invoiceNumber: "INV-001"
  },
  {
    id: "2",
    date: "2024-02-14",
    patientName: "Sarah Smith",
    serviceType: "Cleaning",
    amount: 150.00,
    paymentMethod: "Cash",
    invoiceNumber: "INV-002"
  },
  {
    id: "3",
    date: "2024-02-13",
    patientName: "Mike Johnson",
    serviceType: "Crown",
    amount: 1200.00,
    paymentMethod: "Insurance",
    invoiceNumber: "INV-003"
  }
];

export function IncomeList() {
  const [dateRange, setDateRange] = useState<DateRange>(getCurrentMonthRange());
  const [incomes, setIncomes] = useState(allIncomes);

  useEffect(() => {
    if (dateRange?.from && dateRange?.to) {
      setIncomes(filterDataByDateRange(allIncomes, dateRange));
    }
  }, [dateRange]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Income Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Invoice #</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {incomes.map((income) => (
              <TableRow key={income.id}>
                <TableCell>{income.date}</TableCell>
                <TableCell>{income.patientName}</TableCell>
                <TableCell>{income.serviceType}</TableCell>
                <TableCell>{income.paymentMethod}</TableCell>
                <TableCell>{income.invoiceNumber}</TableCell>
                <TableCell className="text-right">
                  ${income.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}