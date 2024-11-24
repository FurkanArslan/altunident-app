"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Stethoscope, Plus } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">DentalClinic Manager</span>
        </div>

        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Dashboard
          </Link>
          <Link 
            href="/income" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/income") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Income
          </Link>
          <Link 
            href="/expenses" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/expenses") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Expenses
          </Link>
          <Link 
            href="/reports" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/reports") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Reports
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="shadow-sm">
            <Plus className="mr-2 h-4 w-4" />
            New Entry
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}