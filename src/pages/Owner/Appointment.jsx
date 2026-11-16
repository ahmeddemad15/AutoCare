import React, { useState } from "react";

const INITIAL_BOOKINGS = [
  {
    id: 101,
    center: "Auto Performance El Shorouk Center",
    car: "BMW 4M",
    service: "Routine Service + Oil & Filter",
    date: "2026-10-28",
    time: "10:00 AM",
    status: "Confirmed",
    rejectReason: "",
    rating: 0,
    review: "",
  },
  {
    id: 102,
    center: "Express A/C & Suspension Center",
    car: "Toyota Fortuner",
    service: "Front Brake Pads Replacement",
    date: "2026-10-18",
    time: "02:00 PM",
    status: "Rejected",
    rejectReason:
      "Sorry, the workshop is fully booked for electrical diagnostics on this date. Please reschedule.",
    rating: 0,
    review: "",
  },
  {
    id: 103,
    center: "Grand Auto Nano & Detailing Lab",
    car: "BMW 4M",
    service: "Full Interior & Exterior Nano Ceramic Wash",
    date: "2026-10-09",
    time: "12:30 PM",
    status: "Completed",
    rejectReason: "",
    rating: 0,
    review: "",
  },
];

const VEHICLES = [
  { id: 1, name: "BMW 4M", plate: "ABC 1234" },
  { id: 2, name: "Toyota Fortuner", plate: "XYZ 5678" },
];

const CENTERS = [
  {
    id: 1,
    name: "Auto Performance El Shorouk Center",
    hours: "Sat - Thu (09:00 AM - 10:00 PM)",
  },
  {
    id: 2,
    name: "Express A/C & Suspension Center",
    hours: "Sat - Thu (10:00 AM - 09:00 PM)",
  },
  {
    id: 3,
    name: "Grand Auto Nano & Detailing Lab",
    hours: "Daily (10:00 AM - 11:00 PM)",
  },
];

const STATUS_STYLES = {
  Pending: "bg-amber-500/15 text-amber-400 border border-amber-500/35",
  Confirmed: "bg-sky-400/15 text-[#38BDF8] border border-sky-400/35",
  Completed: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/35",
  Rejected: "bg-red-500/15 text-red-400 border border-red-500/35",
};

const Appointment = ({ onBookNewClick }) => {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [statusFilter, setStatusFilter] = useState("All");
  const [toast, setToast] = useState(null);

  // Rate Visit Modal State
  const [ratingBooking, setRatingBooking] = useState(null);
  const [selectedStars, setSelectedStars] = useState(5);
  const [reviewText, setReviewText] = useState("");

  // Quick Book Modal State
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookForm, setBookForm] = useState({
    centerId: CENTERS[0].id,
    car: `${VEHICLES[0].name} (${VEHICLES[0].plate})`,
    service: "Routine Service + Oil & Filter",
    date: new Date().toISOString().slice(0, 10),
    time: "10:00 AM",
  });

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3200);
  };

  // Filter Bookings
  const filteredBookings =
    statusFilter === "All"
      ? bookings
      : bookings.filter((b) => b.status === statusFilter);

  // Cancel or Dismiss Appointment
  const handleRemoveBooking = (id, status) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
    showToast(
      status === "Pending" || status === "Confirmed"
        ? "Appointment cancelled."
        : "Record dismissed from list.",
      "info",
    );
  };

  // Open Rating Modal
  const openRatingModal = (booking) => {
    setRatingBooking(booking);
    setSelectedStars(5);
    setReviewText("");
  };

  // Submit Visit Rating
  const handleRatingSubmit = (e) => {
    e.preventDefault();
    if (!ratingBooking) return;

    setBookings((prev) =>
      prev.map((b) =>
        b.id === ratingBooking.id
          ? { ...b, rating: selectedStars, review: reviewText.trim() }
          : b,
      ),
    );
    setRatingBooking(null);
    showToast("Thank you for your rating! Feedback submitted.");
  };

  // Submit New Booking
  const handleCreateBooking = (e) => {
    e.preventDefault();
    const selectedCenter = CENTERS.find(
      (c) => c.id === Number(bookForm.centerId),
    );

    const newBooking = {
      id: Date.now(),
      center: selectedCenter ? selectedCenter.name : CENTERS[0].name,
      car: bookForm.car.split(" (")[0],
      service: bookForm.service,
      date: bookForm.date,
      time: bookForm.time,
      status: "Pending",
      rejectReason: "",
      rating: 0,
      review: "",
    };

    setBookings((prev) => [newBooking, ...prev]);
    setIsBookModalOpen(false);
    setStatusFilter("All");
    showToast("Booking request submitted and awaiting center confirmation.");
  };

  const selectedCenterObj = CENTERS.find(
    (c) => c.id === Number(bookForm.centerId),
  );

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F0F9FF] px-4 py-8 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#243c63]">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[#F0F9FF]">
              📅 Appointment Records &amp; Feedback
            </h1>
            <p className="text-sm text-[#94A3B8] mt-1">
              Track reservation status, inspect workshop notes, and rate
              completed visits.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onBookNewClick ? onBookNewClick() : setIsBookModalOpen(true)
            }
            className="btn btn-sm md:btn-md border-0 bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg shadow-sky-500/20"
          >
            ➕ Book New Service
          </button>
        </div>

        {/* Status Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {["All", "Pending", "Confirmed", "Completed", "Rejected"].map(
            (tab) => {
              const count =
                tab === "All"
                  ? bookings.length
                  : bookings.filter((b) => b.status === tab).length;
              const isActive = statusFilter === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setStatusFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold transition-all whitespace-nowrap border ${
                    isActive
                      ? "bg-gradient-to-r from-[#2879f5] to-[#29b6f6] text-white border-[#7dd3fc] shadow-md shadow-sky-500/25"
                      : "bg-[#142037] text-[#94A3B8] border-[#243c63] hover:text-[#F0F9FF] hover:border-[#38BDF8]"
                  }`}
                >
                  {tab}{" "}
                  <span
                    className={`ml-1.5 px-2 py-0.5 rounded-full text-[11px] ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#1e2f4d] text-[#38BDF8]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            },
          )}
        </div>

        {/* Appointments Feed */}
        {filteredBookings.length === 0 ? (
          <div className="bg-[#142037] border border-[#243c63] rounded-2xl p-12 text-center">
            <p className="text-[#94A3B8] text-base font-semibold">
              No appointments found under &ldquo;{statusFilter}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setIsBookModalOpen(true)}
              className="btn btn-sm mt-4 border-[#38BDF8] bg-transparent text-[#38BDF8] hover:bg-sky-400/10"
            >
              Schedule a Service
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-[#142037] border border-[#243c63] hover:border-[#38BDF8] transition-all duration-200 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-sky-500/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left: Center, Status Badge & Vehicle Details */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-extrabold text-[#F0F9FF]">
                        {booking.center}
                      </h3>
                      <span
                        className={`badge badge-sm py-3 px-3 font-extrabold uppercase tracking-wider rounded-full ${
                          STATUS_STYLES[booking.status] || ""
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <p className="text-sm text-[#94A3B8]">
                      {booking.service} &bull; Vehicle:{" "}
                      <span className="font-bold text-[#F0F9FF]">
                        {booking.car}
                      </span>
                    </p>
                  </div>

                  {/* Right: Date/Time & Contextual Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-bold text-[#38BDF8] bg-[#1e2f4d]/70 border border-[#243c63] px-3 py-1.5 rounded-xl">
                      📅 {booking.date} ({booking.time})
                    </span>

                    {/* Completed Visit Rating Action */}
                    {booking.status === "Completed" &&
                      (booking.rating > 0 ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm font-extrabold">
                          ⭐ {booking.rating}/5
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openRatingModal(booking)}
                          className="btn btn-sm border-0 bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white font-extrabold rounded-xl"
                        >
                          ⭐ Rate Visit
                        </button>
                      ))}

                    {/* Cancel or Dismiss Action */}
                    {booking.status === "Pending" ||
                    booking.status === "Confirmed" ? (
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveBooking(booking.id, booking.status)
                        }
                        className="btn btn-sm bg-[#1e2f4d]/60 hover:bg-red-500/15 border border-[#243c63] hover:border-red-500/50 text-red-400 font-bold rounded-xl"
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveBooking(booking.id, booking.status)
                        }
                        className="btn btn-sm bg-[#1e2f4d]/60 hover:bg-[#1e2f4d] border border-[#243c63] hover:border-[#38BDF8] text-[#94A3B8] hover:text-[#F0F9FF] font-bold rounded-xl"
                      >
                        Dismiss
                      </button>
                    )}
                  </div>
                </div>

                {/* Rejection Note Box */}
                {booking.status === "Rejected" && booking.rejectReason && (
                  <div className="mt-4 p-3.5 rounded-xl bg-red-500/10 border border-dashed border-red-500/45 text-sm text-red-200">
                    <strong className="text-red-400 font-extrabold">
                      Center Rejection Reason:
                    </strong>{" "}
                    &ldquo;{booking.rejectReason}&rdquo;
                  </div>
                )}

                {/* Submitted Driver Review Box */}
                {booking.status === "Completed" && booking.review && (
                  <div className="mt-4 px-3.5 py-2.5 rounded-xl bg-[#1e2f4d] border border-[#243c63] text-xs md:text-sm text-[#94A3B8]">
                    <strong className="text-[#22D3EE]">Your review:</strong>{" "}
                    {booking.review}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL 1: RATE VISIT MODAL */}
      {ratingBooking && (
        <div className="modal modal-open bg-[#080d1a]/80 backdrop-blur-sm">
          <div className="modal-box bg-[#142037] border border-[#243c63] text-[#F0F9FF] rounded-2xl max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black">
                ⭐ Rate Visit: {ratingBooking.center}
              </h3>
              <button
                type="button"
                onClick={() => setRatingBooking(null)}
                className="btn btn-ghost btn-sm btn-circle text-[#94A3B8]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleRatingSubmit} className="space-y-4">
              <p className="text-sm text-[#94A3B8]">
                How was your service experience for your{" "}
                <span className="text-[#F0F9FF] font-bold">
                  {ratingBooking.car}
                </span>
                ? Your rating helps other drivers choose reliable centers.
              </p>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold text-[#94A3B8]">
                    Select Rating (1 to 5 Stars)
                  </span>
                </label>
                <div className="flex items-center gap-2 text-3xl">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setSelectedStars(star)}
                      className={`transition-transform hover:scale-110 ${
                        star <= selectedStars
                          ? "text-yellow-400"
                          : "text-slate-600"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs font-bold text-[#94A3B8]">
                    Feedback / Review (Optional)
                  </span>
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share your feedback about service quality and timing..."
                  className="textarea bg-[#0F172A] border-[#243c63] focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl h-24 resize-none"
                />
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => setRatingBooking(null)}
                  className="btn btn-sm bg-[#1e2f4d] border-[#243c63] text-[#94A3B8] hover:text-white rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-sm border-0 bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white font-extrabold rounded-xl"
                >
                  Submit Rating
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: BOOK NEW SERVICE MODAL */}
      {isBookModalOpen && (
        <div className="modal modal-open bg-[#080d1a]/80 backdrop-blur-sm">
          <div className="modal-box bg-[#142037] border border-[#243c63] text-[#F0F9FF] rounded-2xl max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black">
                📅 Book Service Appointment
              </h3>
              <button
                type="button"
                onClick={() => setIsBookModalOpen(false)}
                className="btn btn-ghost btn-sm btn-circle text-[#94A3B8]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateBooking} className="space-y-3.5">
              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-xs font-bold text-[#94A3B8]">
                    Service Center
                  </span>
                </label>
                <select
                  value={bookForm.centerId}
                  onChange={(e) =>
                    setBookForm({ ...bookForm, centerId: e.target.value })
                  }
                  className="select select-bordered bg-[#0F172A] border-[#243c63] focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl"
                >
                  {CENTERS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedCenterObj && (
                <div className="p-2.5 rounded-xl bg-sky-400/10 border border-sky-400/25 text-xs text-sky-200">
                  🕒 <strong>Operating Hours:</strong> {selectedCenterObj.hours}
                </div>
              )}

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-xs font-bold text-[#94A3B8]">
                    Select Vehicle
                  </span>
                </label>
                <select
                  value={bookForm.car}
                  onChange={(e) =>
                    setBookForm({ ...bookForm, car: e.target.value })
                  }
                  className="select select-bordered bg-[#0F172A] border-[#243c63] focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={`${v.name} (${v.plate})`}>
                      {v.name} ({v.plate})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label py-1">
                  <span className="label-text text-xs font-bold text-[#94A3B8]">
                    Service Required
                  </span>
                </label>
                <select
                  value={bookForm.service}
                  onChange={(e) =>
                    setBookForm({ ...bookForm, service: e.target.value })
                  }
                  className="select select-bordered bg-[#0F172A] border-[#243c63] focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl"
                >
                  <option>Routine Service + Oil &amp; Filter</option>
                  <option>Computer Diagnostics &amp; Scan</option>
                  <option>Brakes &amp; Rotors Service</option>
                  <option>Detailing &amp; Nano Ceramic</option>
                  <option>A/C Service &amp; Regas</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-bold text-[#94A3B8]">
                      Date
                    </span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().slice(0, 10)}
                    value={bookForm.date}
                    onChange={(e) =>
                      setBookForm({ ...bookForm, date: e.target.value })
                    }
                    className="input input-bordered bg-[#0F172A] border-[#243c63] focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl"
                  />
                </div>

                <div className="form-control">
                  <label className="label py-1">
                    <span className="label-text text-xs font-bold text-[#94A3B8]">
                      Time Slot
                    </span>
                  </label>
                  <select
                    value={bookForm.time}
                    onChange={(e) =>
                      setBookForm({ ...bookForm, time: e.target.value })
                    }
                    className="select select-bordered bg-[#0F172A] border-[#243c63] focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl"
                  >
                    <option>10:00 AM</option>
                    <option>12:30 PM</option>
                    <option>03:30 PM</option>
                    <option>06:00 PM</option>
                    <option>08:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => setIsBookModalOpen(false)}
                  className="btn btn-sm bg-[#1e2f4d] border-[#243c63] text-[#94A3B8] hover:text-white rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-sm border-0 bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white font-extrabold rounded-xl"
                >
                  Confirm Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DaisyUI Toast Notification */}
      {toast && (
        <div className="toast toast-end z-50">
          <div className="alert bg-[#1e2f4d] border border-[#38BDF8] text-[#F0F9FF] font-bold text-sm rounded-xl shadow-xl">
            <span>
              {toast.type === "info" ? "ℹ️" : "✅"} {toast.message}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
