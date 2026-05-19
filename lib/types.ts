export interface Consumer {
  id: string;
  accountNumber: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  status: "active" | "disconnected" | "suspended";
  category: "residential" | "commercial" | "industrial";
  lat: number;
  lng: number;
  lastReading: number;
  balance: number;
}

export interface Reading {
  id: string;
  consumerId: string;
  readingDate: string;
  value: number;
  previousValue: number;
  consumption: number;
  readerId: string;
}

export interface Bill {
  id: string;
  consumerId: string;
  billingMonth: string;
  dueDate: string;
  amount: number;
  status: "paid" | "unpaid" | "overdue";
  consumption: number;
  readingId: string;
  qrCode?: string;
}

export interface Payment {
  id: string;
  billId: string;
  consumerId: string;
  amount: number;
  paymentDate: string;
  method: "online" | "cash" | "bank_transfer";
  reference: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "bill" | "reminder" | "payment" | "alert";
  date: string;
  read: boolean;
}
