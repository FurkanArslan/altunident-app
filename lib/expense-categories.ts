export interface ExpenseSubcategory {
  id: string;
  name: string;
}

export interface ExpenseCategory {
  id: string;
  name: string;
  subcategories: ExpenseSubcategory[];
}

export const expenseCategories: ExpenseCategory[] = [
  {
    id: "personnel",
    name: "Personnel Expenses",
    subcategories: [
      { id: "salaries", name: "Salaries" },
      { id: "insurance", name: "Insurance Payments" },
      { id: "benefits", name: "Benefits" },
      { id: "training", name: "Training Expenses" },
      { id: "transportation", name: "Transportation/Meal Allowances" },
    ],
  },
  {
    id: "office",
    name: "Office Expenses",
    subcategories: [
      { id: "rent", name: "Rent" },
      { id: "electricity", name: "Electricity" },
      { id: "water", name: "Water" },
      { id: "internet", name: "Internet" },
      { id: "phone", name: "Phone" },
      { id: "tax", name: "Tax Payments" },
      { id: "maintenance", name: "Maintenance & Repair" },
      { id: "cleaning", name: "Cleaning Supplies" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing Expenses",
    subcategories: [
      { id: "digital-ads", name: "Digital Advertising" },
      { id: "social-media", name: "Social Media Ads" },
      { id: "print", name: "Printed Marketing Materials" },
      { id: "events", name: "Promotional Events" },
      { id: "agency", name: "Advertising Agency Fees" },
      { id: "seo", name: "SEO/SEM Services" },
    ],
  },
  {
    id: "medical-supplies",
    name: "Medical Supply Expenses",
    subcategories: [
      { id: "dental-materials", name: "Dental Materials" },
      { id: "sterilization", name: "Sterilization Products" },
      { id: "xray-materials", name: "X-ray Materials" },
      { id: "protective", name: "Protective Equipment" },
      { id: "disposable", name: "Disposable Supplies" },
      { id: "lab-equipment", name: "Laboratory Equipment" },
    ],
  },
  {
    id: "medical-devices",
    name: "Medical Device & Equipment Expenses",
    subcategories: [
      { id: "dental-units", name: "Dental Units" },
      { id: "xray-machines", name: "X-ray Machines" },
      { id: "sterilization-eq", name: "Sterilization Equipment" },
      { id: "treatment-eq", name: "Treatment Equipment" },
      { id: "maintenance-contracts", name: "Maintenance Contracts" },
      { id: "spare-parts", name: "Spare Parts Purchases" },
    ],
  },
  {
    id: "operational",
    name: "Operational Expenses",
    subcategories: [
      { id: "shipping", name: "Shipping/Transportation" },
      { id: "insurance-op", name: "Insurance Payments" },
      { id: "accounting", name: "Accounting Services" },
      { id: "legal", name: "Legal Consulting" },
      { id: "software", name: "Software Licenses" },
      { id: "other-services", name: "Other Services" },
    ],
  },
];