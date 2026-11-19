// ⚠️ DUMMY DATA: frontend demo only. This is NOT coming from a backend.

export const CENTER_INFO = {
  name: "Speed Auto Center",
  branch: "New Cairo Branch",
  hours: "09:00 AM - 10:00 PM",
  phone: "01023456789",
  email: "info@speedauto.example",
  address: "90th Street, New Cairo, Cairo",
  description:
    "Full-service car maintenance: oil change, diagnostics, brakes and AC.",
};

export const BOOKINGS = [
  {
    id: 1,
    customer: "Ahmed Hassan",
    car: "Toyota Corolla 2020",
    service: "Oil Change",
    date: "Nov 17, 2026",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    id: 2,
    customer: "Mona Adel",
    car: "Hyundai Elantra 2019",
    service: "Brake Inspection",
    date: "Nov 17, 2026",
    time: "11:30 AM",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Omar Khaled",
    car: "Kia Sportage 2021",
    service: "Full Diagnostics",
    date: "Nov 16, 2026",
    time: "01:00 PM",
    status: "Confirmed",
  },
  {
    id: 4,
    customer: "Sara Mostafa",
    car: "Nissan Sunny 2018",
    service: "AC Service",
    date: "Nov 16, 2026",
    time: "03:30 PM",
    status: "Confirmed",
  },
  {
    id: 5,
    customer: "Youssef Ali",
    car: "Chevrolet Optra 2017",
    service: "Wheel Alignment",
    date: "Nov 15, 2026",
    time: "09:30 AM",
    status: "Completed",
  },
  {
    id: 6,
    customer: "Nour Ibrahim",
    car: "Toyota Yaris 2022",
    service: "Oil Change",
    date: "Nov 15, 2026",
    time: "12:00 PM",
    status: "Completed",
  },
  {
    id: 7,
    customer: "Hany Samir",
    car: "Renault Logan 2016",
    service: "Battery Replacement",
    date: "Nov 14, 2026",
    time: "02:00 PM",
    status: "Completed",
  },
  {
    id: 8,
    customer: "Laila Fathy",
    car: "Skoda Octavia 2020",
    service: "Engine Tune-up",
    date: "Nov 14, 2026",
    time: "04:00 PM",
    status: "Rejected",
  },
];

export const SERVICES = [
  { id: 1, name: "Oil Change", price: 350, bookings: 42 },
  { id: 2, name: "Full Diagnostics", price: 500, bookings: 27 },
  { id: 3, name: "Brake Inspection", price: 300, bookings: 21 },
  { id: 4, name: "AC Service", price: 450, bookings: 18 },
  { id: 5, name: "Wheel Alignment", price: 250, bookings: 15 },
  { id: 6, name: "Battery Replacement", price: 200, bookings: 9 },
];

export const BOOKING_STATUSES = [
  "Pending",
  "Confirmed",
  "Completed",
  "Rejected",
];
