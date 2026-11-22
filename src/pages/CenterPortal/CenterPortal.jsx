import { Routes, Route, Navigate } from "react-router-dom";

import CenterLayout from "../../layouts/CenterLayout";
import DashboardHome from "./DashboardHome";
import BookingsPage from "./BookingsPage";
import ServicesPage from "./ServicesPage";
import SettingsPage from "./SettingsPage";
import ProfilePage from "./ProfilePage";
import useCenterData from "./useCenterData";

const PAGE_TITLES = {
  "/center-portal": "Center Dashboard",
  "/center-portal/bookings": "Bookings",
  "/center-portal/services": "Services",

  "/center-portal/profile": "My Profile",
  "/center-portal/settings": "Settings",
};

const CenterPortal = () => {
  const {
    centerInfo,
    bookings,
    services,
    isLoading,
    error,
    actionError,
    busyBookingId,
    retry,
    confirmBooking,
    rejectBooking,
    completeBooking,
    updateCenterInfo,
  } = useCenterData();

  // Decide what to show inside the layout: loading, error, or the real pages
  let content;
  if (isLoading) {
    content = (
      <p className="animate-pulse py-20 text-center font-bold text-(--cp-muted)">
        Loading center data...
      </p>
    );
  } else if (error) {
    content = (
      <div className="rounded-2xl border border-red-500/30 bg-(--cp-surface) p-10 text-center">
        <p className="font-bold text-red-400">{error}</p>
        <button
          type="button"
          onClick={retry}
          className="mt-4 cursor-pointer rounded-lg bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-4 py-2 text-sm font-extrabold text-white transition hover:brightness-110"
        >
          Try again
        </button>
      </div>
    );
  } else {
    content = (
      <Routes>
        <Route
          index
          element={
            <DashboardHome
              centerInfo={centerInfo}
              bookings={bookings}
              services={services}
            />
          }
        />
        <Route
          path="bookings"
          element={
            <BookingsPage
              bookings={bookings}
              busyBookingId={busyBookingId}
              confirmBooking={confirmBooking}
              rejectBooking={rejectBooking}
              completeBooking={completeBooking}
            />
          }
        />
        <Route path="services" element={<ServicesPage />} />
        <Route path="settings" element={<SettingsPage />} />

        <Route
          path="profile"
          element={
            <ProfilePage
              centerInfo={centerInfo}
              updateCenterInfo={updateCenterInfo}
            />
          }
        />

        <Route path="*" element={<Navigate to="/center-portal" replace />} />
      </Routes>
    );
  }

  return (
    <CenterLayout centerName={centerInfo?.name} actionError={actionError}>
      {content}
    </CenterLayout>
  );
};

export default CenterPortal;
