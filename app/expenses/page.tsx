"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Gider tipi için interface
interface Expense {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  paymentMethod: string;
  invoiceNo?: string;
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState<Partial<Expense>>({});

  const handleAddExpense = () => {
    if (newExpense.date && newExpense.amount) {
      const expense: Expense = {
        ...newExpense,
        id: Date.now(),
      } as Expense;
      setExpenses([...expenses, expense]);
      setNewExpense({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gider Yönetimi</h1>

      {/* Gider Ekleme Formu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          type="date"
          value={newExpense.date || ''}
          onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
          placeholder="Tarih"
        />
        <Input
          type="text"
          value={newExpense.description || ''}
          onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
          placeholder="Açıklama"
        />
        <Select 
          value={newExpense.category} 
          onValueChange={(value) => setNewExpense({...newExpense, category: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Kategori Seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personelMaaslari">Personel Maaşları</SelectItem>
            <SelectItem value="malzemeAlimi">Malzeme Alımı</SelectItem>
            <SelectItem value="kira">Kira</SelectItem>
            <SelectItem value="pazarlama">Pazarlama</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="number"
          value={newExpense.amount || ''}
          onChange={(e) => setNewExpense({...newExpense, amount: parseFloat(e.target.value)})}
          placeholder="Tutar"
        />
        <Select 
          value={newExpense.paymentMethod} 
          onValueChange={(value) => setNewExpense({...newExpense, paymentMethod: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Ödeme Yöntemi" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nakit">Nakit</SelectItem>
            <SelectItem value="krediKarti">Kredi Kartı</SelectItem>
            <SelectItem value="transfer">Banka Transferi</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          value={newExpense.invoiceNo || ''}
          onChange={(e) => setNewExpense({...newExpense, invoiceNo: e.target.value})}
          placeholder="Fatura No"
        />
        <Button onClick={handleAddExpense}>Gider Ekle</Button>
      </div>

      {/* Gider Listesi */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tarih</TableHead>
            <TableHead>Açıklama</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Tutar</TableHead>
            <TableHead>Ödeme Yöntemi</TableHead>
            <TableHead>Fatura No</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.amount} TL</TableCell>
              <TableCell>{expense.paymentMethod}</TableCell>
              <TableCell>{expense.invoiceNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 