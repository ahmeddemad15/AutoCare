// MOCK DATA - demo only. Replace by real API responses (see adminService.js).
export const mockStats = {
  registeredUsers: 1420,
  activeCenters: 48,
  fulfilledBookings: 3890,
  openInquiries: 0,
};

export const mockMonthlyVolume = [
  { month: "May", volume: 420 },
  { month: "Jun", volume: 580 },
  { month: "Jul", volume: 790 },
  { month: "Aug", volume: 1100 },
  { month: "Sep", volume: 1420 },
  { month: "Oct", volume: 1890 },
];

// Future shape: { id, title, reportedBy, targetName, status, createdAt }
export const mockIncidentReports = [];

export const mockAffiliationRequests = [
  {
    id: "req-1",
    centerName: "مركز إيليت موتورز لصيانة السيارات الفارهة",
    contactName: "الشيخ زايد",
    phone: "01011122233",
  },
  {
    id: "req-2",
    centerName: "ورشة التحدي لضبط الزوايا والإطارات",
    contactName: "مدينة نصر",
    phone: "01044455566",
  },
];
