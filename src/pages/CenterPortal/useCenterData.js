import { useState, useEffect } from "react";
import * as api from "./centerApi";

const useCenterData = () => {
  const [centerInfo, setCenterInfo] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionError, setActionError] = useState(null);
  const [busyBookingId, setBusyBookingId] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  // Load everything once (and again whenever reloadKey changes)
  useEffect(() => {
    let ignore = false;
    Promise.all([api.getCenterInfo(), api.getBookings(), api.getServices()])
      .then(([info, bookingsData, servicesData]) => {
        if (ignore) return;
        setCenterInfo(info);
        setBookings(bookingsData);
        setServices(servicesData);
        setIsLoading(false);
      })
      .catch((err) => {
        if (ignore) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [reloadKey]);

  const retry = () => {
    setError(null);
    setIsLoading(true);
    setReloadKey((key) => key + 1);
  };
  // Send the change to the API first, then update the screen with the saved result
  const updateBooking = async (id, changes) => {
    setActionError(null);
    setBusyBookingId(id);
    try {
      const updated = await api.updateBooking(id, changes);
      setBookings((prev) => prev.map((b) => (b.id === id ? updated : b)));
    } catch (err) {
      setActionError(err.message);
    } finally {
      setBusyBookingId(null);
    }
  };

  const confirmBooking = (id) => updateBooking(id, { status: "Confirmed" });
  const rejectBooking = (id, reason) =>
    updateBooking(id, { status: "Rejected", rejectReason: reason });
  const completeBooking = (id, invoice) =>
    updateBooking(id, { status: "Completed", invoice });
  return {
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
  };
};
export default useCenterData;
