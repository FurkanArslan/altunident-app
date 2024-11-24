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

const allExpenses = [
  {
    id: "1",
    date: "2024-10-15",
    description: "Monthly Rent",
    category: "Rent",
    amount: 2500.00,
    paymentMethod: "Bank Transfer",
    invoiceNumber: "EXP-001"
  },
  {
    id: "2",
    date: "2024-10-14",
    description: "Dental Supplies Restock",
    category: "Dental Supplies",
    amount: 1250.00,
    paymentMethod: "Credit Card",
    invoiceNumber: "EXP-002"
  },
  {
    id: "3",
    date: "2024-10-13",
    description: "Staff Salaries",
    category: "Staff Salaries",
    amount: 5000.00,
    paymentMethod: "Bank Transfer",
    invoiceNumber: "EXP-003"
  }
];

export function ExpenseList() {
  const [dateRange, setDateRange] = useState<DateRange>(getCurrentMonthRange());
  const [expenses, setExpenses] = useState(allExpenses);

  useEffect(() => {
    if (dateRange?.from && dateRange?.to) {
      setExpenses(filterDataByDateRange(allExpenses, dateRange));
    }
  }, [dateRange]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Invoice #</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.paymentMethod}</TableCell>
                <TableCell>{expense.invoiceNumber}</TableCell>
                <TableCell className="text-right text-red-600">
                  ${expense.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}