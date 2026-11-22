import { useState } from "react";
import SettingsSection from "./components/center/settings/SettingsSection";
import SettingsToggle from "./components/center/settings/SettingsToggle";
import { SETTINGS_STORAGE_KEY, readSettings } from "./settingsData";

const sections = [
  ["general", "General Information"],
  ["bookings", "Booking Preferences"],
  ["notifications", "Notification Preferences"],
  ["privacy", "Privacy & Visibility"],
];

const Field = ({ label, value, onChange, type = "text", ...props }) => (
  <label className="block space-y-2 text-sm font-bold">
    <span>{label}</span>
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      {...props}
      className="w-full rounded-xl border border-(--cp-line) bg-(--cp-bg) px-4 py-3 font-normal text-(--cp-text) outline-none focus:border-(--cp-accent)"
    />
  </label>
);

const SettingsPage = () => {
  const [initial] = useState(readSettings);
  const [settings, setSettings] = useState(initial.settings);
  const [savedSettings, setSavedSettings] = useState(initial.settings);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(initial.error);
  const update = (key, value) => {
    setSettings((current) => ({ ...current, [key]: value }));
    setSaved(false);
  };
  const save = () => {
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
      setSavedSettings({ ...settings });
      setError("");
      setSaved(true);
    } catch {
      setError(
        "Could not save settings in this browser. Check storage availability and try again.",
      );
      setSaved(false);
    }
  };
  const reset = () => {
    setSettings({ ...savedSettings });
    setSaved(false);
  };
  const toggle = (key, label) => (
    <SettingsToggle
      label={label}
      checked={settings[key]}
      onChange={(value) => update(key, value)}
    />
  );

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="mb-2 text-sm font-bold text-(--cp-accent)">
          Service Center / Settings
        </p>
        <h2 className="text-2xl font-extrabold sm:text-3xl">Center Settings</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-(--cp-muted)">
          Manage your center information, booking rules, notifications, and
          visibility.
        </p>
      </header>
      <nav
        aria-label="Settings sections"
        className="flex gap-2 overflow-x-auto rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-1.5 sm:gap-3"
      >
        {sections.map(([id, label], index) => (
          <a
            key={id}
            href={`#${id}`}
            className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-bold transition sm:px-5 ${index === 0 ? "bg-(--cp-accent) text-white" : "text-(--cp-muted) hover:bg-(--cp-surface-2) hover:text-(--cp-text)"}`}
          >
            {label}
          </a>
        ))}
      </nav>
      {error && (
        <p
          role="alert"
          className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm font-bold text-amber-300"
        >
          {error}
        </p>
      )}
      <SettingsSection
        id="general"
        title="General Information"
        description="Contact details shown to your team and customers."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Service Center Name"
            value={settings.centerName}
            onChange={(v) => update("centerName", v)}
          />
          <Field
            label="Email Address"
            type="email"
            value={settings.email}
            onChange={(v) => update("email", v)}
          />
          <Field
            label="Phone Number"
            type="tel"
            value={settings.phone}
            onChange={(v) => update("phone", v)}
          />
          <Field
            label="Center Address"
            value={settings.address}
            onChange={(v) => update("address", v)}
          />
        </div>
      </SettingsSection>
      <SettingsSection
        id="bookings"
        title="Booking Preferences"
        description="Choose how incoming and cancelled bookings are handled."
      >
        {toggle("automaticConfirmation", "Automatic Booking Confirmation")}
        {toggle("allowCancellation", "Allow Booking Cancellation")}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Minimum Advance Booking Time (hours)"
            type="number"
            min="0"
            value={settings.advanceBookingHours}
            onChange={(v) => update("advanceBookingHours", Number(v))}
          />
          <Field
            label="Cancellation Deadline (hours)"
            type="number"
            min="0"
            value={settings.cancellationDeadlineHours}
            onChange={(v) => update("cancellationDeadlineHours", Number(v))}
          />
        </div>
      </SettingsSection>
      <SettingsSection
        id="notifications"
        title="Notification Preferences"
        description="Control which updates you receive."
      >
        {toggle("emailNotifications", "Email Notifications")}
        {toggle("newBookingNotifications", "New Booking Notifications")}
        {toggle("bookingStatusUpdates", "Booking Status Updates")}
        {toggle("newCustomerNotifications", "New Customer Notifications")}
      </SettingsSection>
      <SettingsSection
        id="privacy"
        title="Privacy & Visibility"
        description="Choose which contact details customers can see."
      >
        {toggle("showPhone", "Show Phone Number")}
        {toggle("showAddress", "Show Center Address")}
      </SettingsSection>
      <footer className="flex flex-col-reverse justify-between gap-3 pb-8 sm:flex-row sm:items-center">
        <p className="text-xs text-(--cp-muted)">
          Changes are stored in this browser.
        </p>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:justify-end sm:gap-3">
          <button
            type="button"
            onClick={reset}
            className="cursor-pointer rounded-xl px-3 py-3 text-xs font-bold text-(--cp-muted) hover:bg-(--cp-surface-2) sm:px-4 sm:text-sm"
          >
            Reset Changes
          </button>
          <button
            type="button"
            onClick={save}
            className="cursor-pointer rounded-xl bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-3 py-3 text-xs font-bold text-white transition hover:brightness-110 sm:px-5 sm:text-sm"
          >
            {saved ? "Changes Saved" : "Save Changes"}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SettingsPage;
