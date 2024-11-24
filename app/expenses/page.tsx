"use client";

import { useState } from "react";
import { ExpenseHeader } from "@/components/expenses/header";
import { CategoryTable } from "@/components/expenses/category-table";
import { AddExpenseButton } from "@/components/expenses/add-button";
import { ExpenseSummary } from "@/components/expenses/summary";
import { ExpenseFilters } from "@/components/expenses/filters";
import { expenseCategories } from "@/lib/expense-categories";

// Mock data - replace with actual data in production
const mockExpenses = [
  {
    id: "1",
    date: "2024-02-15",
    categoryId: "personnel",
    subcategoryId: "salaries",
    description: "Monthly Staff Salaries",
    amount: 15000.00,
  },
  {
    id: "2",
    date: "2024-02-14",
    categoryId: "medical-supplies",
    subcategoryId: "dental-materials",
    description: "Dental Supplies Restock",
    amount: 2500.00,
  },
  // Add more mock expenses as needed
];

export default function ExpensePage() {
  const [expenses] = useState(mockExpenses);

  return (
    <div className="flex flex-col gap-8">
      <ExpenseHeader />
      <ExpenseSummary />
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Expense Categories</h2>
        <AddExpenseButton />
      </div>
      
      <ExpenseFilters />

      <div className="grid gap-6">
        {expenseCategories.map((category) => {
          const categoryExpenses = expenses.filter(
            expense => expense.categoryId === category.id
          );

          return (
            <CategoryTable
              key={category.id}
              category={category}
              expenses={categoryExpenses}
            />
          );
        })}
      </div>
    </div>
  );
}