"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExpenseCategory } from "@/lib/expense-categories";

interface CategoryTableProps {
  category: ExpenseCategory;
  expenses: Array<{
    id: string;
    date: string;
    subcategoryId: string;
    description: string;
    amount: number;
  }>;
}

export function CategoryTable({ category, expenses }: CategoryTableProps) {
  const getSubcategoryName = (subcategoryId: string) => {
    return category.subcategories.find(sub => sub.id === subcategoryId)?.name || subcategoryId;
  };

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{category.name}</CardTitle>
        <div className="text-2xl font-bold">
          ${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Subcategory</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{getSubcategoryName(expense.subcategoryId)}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell className="text-right">
                  ${expense.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}