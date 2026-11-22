export const SETTINGS_STORAGE_KEY = "autocare_center_settings";

export const INITIAL_SETTINGS = {
  centerName: "",
  email: "",
  phone: "",
  address: "",
  automaticConfirmation: true,
  allowCancellation: true,
  advanceBookingHours: 24,
  cancellationDeadlineHours: 12,
  emailNotifications: true,
  newBookingNotifications: true,
  bookingStatusUpdates: true,
  newCustomerNotifications: false,
  showPhone: true,
  showAddress: true,
};

export function readSettings() {
  try {
    const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
    return {
      settings: stored
        ? { ...INITIAL_SETTINGS, ...JSON.parse(stored) }
        : { ...INITIAL_SETTINGS },
      error: "",
    };
  } catch {
    return {
      settings: { ...INITIAL_SETTINGS },
      error: "Could not read saved settings from this browser.",
    };
  }
}
