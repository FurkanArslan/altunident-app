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

const allTransactions = [
  {
    id: "1",
    date: "2024-02-15",
    description: "John Doe - Root Canal",
    amount: 850.00,
    type: "income"
  },
  {
    id: "2",
    date: "2024-02-14",
    description: "Dental Supplies",
    amount: -234.56,
    type: "expense"
  },
  {
    id: "3",
    date: "2024-02-14",
    description: "Sarah Smith - Cleaning",
    amount: 150.00,
    type: "income"
  },
  {
    id: "4",
    date: "2024-02-13",
    description: "Staff Salaries",
    amount: -2500.00,
    type: "expense"
  },
  {
    id: "5",
    date: "2024-02-13",
    description: "Mike Johnson - Crown",
    amount: 1200.00,
    type: "income"
  }
];

export function RecentTransactions() {
  const [dateRange, setDateRange] = useState<DateRange>(getCurrentMonthRange());
  const [transactions, setTransactions] = useState(allTransactions);

  useEffect(() => {
    if (dateRange?.from && dateRange?.to) {
      setTransactions(filterDataByDateRange(allTransactions, dateRange));
    }
  }, [dateRange]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className={`text-right ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}