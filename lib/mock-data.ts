import { Consumer, Bill, Payment, Reading, Notification } from "./types";

export const MOCK_CONSUMERS: Consumer[] = [
  {
    id: "1",
    accountNumber: "ACC-001",
    name: "John Doe",
    address: "123 Azure St, Sky City",
    email: "john@example.com",
    phone: "+1 234 567 8901",
    status: "active",
    category: "residential",
    lat: 34.0522,
    lng: -118.2437,
    lastReading: 1250,
    balance: 0,
  },
  {
    id: "2",
    accountNumber: "ACC-002",
    name: "Jane Smith",
    address: "456 Emerald Ave, Sky City",
    email: "jane@example.com",
    phone: "+1 234 567 8902",
    status: "active",
    category: "residential",
    lat: 34.0532,
    lng: -118.2457,
    lastReading: 3420,
    balance: 45.5,
  },
  {
    id: "3",
    accountNumber: "ACC-003",
    name: "Metro Center Mall",
    address: "789 Commercial Blvd, Sky City",
    email: "billing@metromall.com",
    phone: "+1 234 567 8903",
    status: "active",
    category: "commercial",
    lat: 34.0542,
    lng: -118.2477,
    lastReading: 15400,
    balance: 1200.0,
  },
  {
    id: "4",
    accountNumber: "ACC-004",
    name: "Robert Brown",
    address: "101 Pine St, Sky City",
    email: "robert@example.com",
    phone: "+1 234 567 8904",
    status: "disconnected",
    category: "residential",
    lat: 34.0512,
    lng: -118.2427,
    lastReading: 890,
    balance: 210.25,
  },
];

export const MOCK_READINGS: Reading[] = [
  {
    id: "r1",
    consumerId: "1",
    readingDate: "2025-04-01",
    value: 1250,
    previousValue: 1220,
    consumption: 30,
    readerId: "staff-1",
  },
  {
    id: "r2",
    consumerId: "2",
    readingDate: "2025-04-01",
    value: 3420,
    previousValue: 3380,
    consumption: 40,
    readerId: "staff-1",
  },
];

export const MOCK_BILLS: Bill[] = [
  {
    id: "b1",
    consumerId: "1",
    billingMonth: "April 2025",
    dueDate: "2025-04-20",
    amount: 45.0,
    status: "paid",
    consumption: 30,
    readingId: "r1",
    qrCode: "VERIFIED-B1-2025",
  },
  {
    id: "b2",
    consumerId: "2",
    billingMonth: "April 2025",
    dueDate: "2025-04-20",
    amount: 60.0,
    status: "unpaid",
    consumption: 40,
    readingId: "r2",
    qrCode: "VERIFIED-B2-2025",
  },
  {
    id: "b3",
    consumerId: "4",
    billingMonth: "March 2025",
    dueDate: "2025-03-20",
    amount: 210.25,
    status: "overdue",
    consumption: 150,
    readingId: "rx",
    qrCode: "VERIFIED-B3-2025",
  },
];

export const MOCK_PAYMENTS: Payment[] = [
  {
    id: "p1",
    billId: "b1",
    consumerId: "1",
    amount: 45.0,
    paymentDate: "2025-04-15",
    method: "online",
    reference: "PAY-ORD-9921",
  },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    userId: "1",
    title: "Bill Generated",
    message: "Your bill for April 2025 has been generated. Amount: $45.00",
    type: "bill",
    date: "2025-04-02",
    read: true,
  },
  {
    id: "n2",
    userId: "1",
    title: "Payment Confirmed",
    message: "Thank you! Your payment of $45.00 has been received.",
    type: "payment",
    date: "2025-04-15",
    read: false,
  },
];

// Sample chart data for analytics (consumption trends across sectors)
export const chartData = [
  { name: "Mon", residential: 120, commercial: 80, industrial: 60 },
  { name: "Tue", residential: 150, commercial: 90, industrial: 70 },
  { name: "Wed", residential: 170, commercial: 110, industrial: 90 },
  { name: "Thu", residential: 160, commercial: 120, industrial: 85 },
  { name: "Fri", residential: 180, commercial: 130, industrial: 95 },
  { name: "Sat", residential: 140, commercial: 100, industrial: 80 },
  { name: "Sun", residential: 130, commercial: 95, industrial: 75 },
];

// Category breakdown used for pie/summary charts
export const categoryData = [
  { name: "Residential", value: 1050 },
  { name: "Commercial", value: 725 },
  { name: "Industrial", value: 555 },
];

// Recent activity log entries used by the dashboard RecentActivity component
export const activityData = [
  {
    id: "a1",
    type: "order",
    message: "Payment of $45.00 received for ACC-001",
    user: "Billing",
    timestamp: "2h ago",
  },
  {
    id: "a2",
    type: "alert",
    message: "High consumption alert: ACC-004 recorded 150 m3",
    user: "Field Ops",
    timestamp: "3h ago",
  },
  {
    id: "a3",
    type: "shipment",
    message: "Replacement meter shipped to route 7",
    user: "Warehouse",
    timestamp: "Yesterday",
  },
  {
    id: "a4",
    type: "supplier",
    message: "Field crew restocked sensors and tags",
    user: "Procurement",
    timestamp: "2 days ago",
  },
  {
    id: "a5",
    type: "order",
    message: "Bill generated for ACC-002 (April 2025) — $60.00",
    user: "Billing",
    timestamp: "Apr 20, 2025",
  },
];

// Trend data shaped for charts used by the portal page
export const consumptionTrend = chartData.map((d) => ({
  month: d.name,
  value: d.residential,
}));

// Current bill to display in the portal; defaults to the first mock bill
export const currentBill: Bill = MOCK_BILLS[0] ?? {
  id: "b0",
  consumerId: "1",
  billingMonth: "N/A",
  dueDate: "N/A",
  amount: 0,
  status: "unpaid",
  consumption: 0,
  readingId: "",
  qrCode: "",
};
