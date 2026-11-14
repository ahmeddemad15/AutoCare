// Replaceable data layer. Every function returns a Promise, so swapping the
// mock for fetch('/api/admin/...') later does not change any component.
// IS_MOCK_DATA stays true until real endpoints are wired in.
import {
  mockStats,
  mockMonthlyVolume,
  mockIncidentReports,
  mockAffiliationRequests,
} from "./adminMockData";

export const IS_MOCK_DATA = true;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchAdminDashboard() {
  // TODO: replace with GET /api/admin/dashboard (FR-28)
  await wait(300);
  return {
    stats: mockStats,
    monthlyVolume: mockMonthlyVolume,
    incidentReports: mockIncidentReports,
    affiliationRequests: mockAffiliationRequests,
  };
}

export async function approveCenterRequest(requestId) {
  // TODO: replace with POST /api/admin/center-requests/:id/approve (FR-26)
  await wait(300);
  return { id: requestId, status: "approved", simulated: IS_MOCK_DATA };
}

export async function declineCenterRequest(requestId) {
  // TODO: replace with POST /api/admin/center-requests/:id/decline (FR-26)
  await wait(300);
  return { id: requestId, status: "declined", simulated: IS_MOCK_DATA };
}
