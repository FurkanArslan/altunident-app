"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Gelir tipi için interface
interface Income {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  paymentMethod: string;
  invoiceNo?: string;
}

export default function IncomePage() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [newIncome, setNewIncome] = useState<Partial<Income>>({});

  const handleAddIncome = () => {
    if (newIncome.date && newIncome.amount) {
      const income: Income = {
        ...newIncome,
        id: Date.now(),
      } as Income;
      setIncomes([...incomes, income]);
      setNewIncome({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gelir Yönetimi</h1>

      {/* Gelir Ekleme Formu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input
          type="date"
          value={newIncome.date || ''}
          onChange={(e) => setNewIncome({...newIncome, date: e.target.value})}
          placeholder="Tarih"
        />
        <Input
          type="text"
          value={newIncome.description || ''}
          onChange={(e) => setNewIncome({...newIncome, description: e.target.value})}
          placeholder="Açıklama"
        />
        <Select 
          value={newIncome.category} 
          onValueChange={(value) => setNewIncome({...newIncome, category: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Kategori Seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="muayene">Muayene</SelectItem>
            <SelectItem value="tedavi">Tedavi</SelectItem>
            <SelectItem value="protez">Protez</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="number"
          value={newIncome.amount || ''}
          onChange={(e) => setNewIncome({...newIncome, amount: parseFloat(e.target.value)})}
          placeholder="Tutar"
        />
        <Select 
          value={newIncome.paymentMethod} 
          onValueChange={(value) => setNewIncome({...newIncome, paymentMethod: value})}
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
          value={newIncome.invoiceNo || ''}
          onChange={(e) => setNewIncome({...newIncome, invoiceNo: e.target.value})}
          placeholder="Fatura No"
        />
        <Button onClick={handleAddIncome}>Gelir Ekle</Button>
      </div>

      {/* Gelir Listesi */}
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
          {incomes.map((income) => (
            <TableRow key={income.id}>
              <TableCell>{income.date}</TableCell>
              <TableCell>{income.description}</TableCell>
              <TableCell>{income.category}</TableCell>
              <TableCell>{income.amount} TL</TableCell>
              <TableCell>{income.paymentMethod}</TableCell>
              <TableCell>{income.invoiceNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 