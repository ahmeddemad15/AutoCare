import React, { useState } from "react";

const Appointment = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [israteopen, setIsrateopen] = useState(false);

  const openratemodal = () => {
    setIsrateopen(true);
  };
  const openBookModal = () => {
    setIsBookOpen(true);
  };

  /* Some fake data to use it for test */
  const bookings = [
    {
      id: 101,
      center: "Auto Performance El Shorouk Center",
      operatingHours: "Sat - Thu (09:00 AM - 10:00 PM)",
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
      operatingHours: "Sat - Thu (10:00 AM - 09:00 PM)",
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
      operatingHours: "Daily (10:00 AM - 11:00 PM)",
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

  const [selectedCenter, setSelectedCenter] = useState(bookings[0].center);

  const currentCenterObj =
    bookings.find((b) => b.center === selectedCenter) || bookings[0];

  const statusStyles = {
    Pending: "bg-amber-500/15 text-amber-400 border border-amber-500/35",
    Confirmed: "bg-sky-400/15 text-[#38BDF8] border border-sky-400/35",
    Completed:
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/35",
    Rejected: "bg-red-500/15 text-red-400 border border-red-500/35",
  };

  const filteredBookings =
    statusFilter === "All"
      ? bookings
      : bookings.filter((b) => b.status === statusFilter);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F0F9FF] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#F0F9FF]">
              Appointment Records &amp; Feedback
            </h2>
            <span className="text-sm font-semibold text-[#94A3B8]">
              Total Reservations:{" "}
              <strong className="text-[#22D3EE]">
                {filteredBookings.length} Records
              </strong>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select
              defaultValue=""
              className="bg-[#142037] text-[#F0F9FF] border border-[#243c63] rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:border-[#38BDF8]"
            >
              <option value="">All Vehicles</option>
              <option value="BMW 4M">BMW 4M</option>
              <option value="Toyota Fortuner">Toyota Fortuner</option>
            </select>

            <button
              onClick={openBookModal}
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white font-extrabold px-4 py-2.5 rounded-xl text-sm shadow-lg shadow-blue-700/30 hover:brightness-110 transition-all cursor-pointer"
            >
              <span>➕</span>
              <span>Book New Service</span>
            </button>
          </div>
        </div>

        {/* When I click on Book service */}
        {isBookOpen && (
          <div className="fixed inset-0 z-50 bg-[#080d1a]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#142037] border border-[#243c63] text-[#F0F9FF] rounded-2xl max-w-lg w-full p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-black">
                  📅 Book Service Appointment
                </h3>
                <button
                  type="button"
                  onClick={() => setIsBookOpen(false)}
                  className="text-[#94A3B8] hover:text-white text-lg font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
              {/* Input form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsBookOpen(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                    Service Center
                  </label>
                  <select
                    value={selectedCenter}
                    onChange={(e) => setSelectedCenter(e.target.value)}
                    className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                  >
                    {bookings.map((b) => (
                      <option key={b.id} value={b.center}>
                        {b.center}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-sky-400/10 border border-sky-400/25 text-xs text-sky-200">
                  🕒 <strong>Operating Hours:</strong>{" "}
                  {currentCenterObj.operatingHours}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                    Select Vehicle
                  </label>
                  <select className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold">
                    <option>BMW 4M (ABC 1234)</option>
                    <option>Toyota Fortuner (XYZ 5678)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                    Service Required
                  </label>
                  <select className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold">
                    <option>Routine Service + Oil &amp; Filter</option>
                    <option>Computer Diagnostics &amp; Scan</option>
                    <option>Brakes &amp; Rotors Service</option>
                    <option>Detailing &amp; Nano Ceramic</option>
                    <option>A/C Service &amp; Regas</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                      Time Slot
                    </label>
                    <select className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold">
                      <option>10:00 AM</option>
                      <option>12:30 PM</option>
                      <option>03:30 PM</option>
                      <option>06:00 PM</option>
                      <option>08:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsBookOpen(false)}
                    className="px-4 py-2 rounded-xl bg-[#1e2f4d] border border-[#243c63] text-[#94A3B8] hover:text-white text-sm font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white text-sm font-extrabold shadow-lg shadow-blue-700/30 hover:brightness-110 cursor-pointer"
                  >
                    Confirm Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Status Filter Tabs */}
        <div className="bg-[#142037] border border-[#243c63] rounded-2xl p-3 mb-6 flex items-center gap-2 overflow-x-auto">
          {["All", "Pending", "Confirmed", "Completed", "Rejected"].map(
            (tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setStatusFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold transition-all whitespace-nowrap border cursor-pointer ${
                  statusFilter === tab
                    ? "bg-gradient-to-r from-[#2879f5] to-[#29b6f6] text-white border-[#7dd3fc] shadow-md shadow-sky-500/25"
                    : "bg-[#0F172A]/60 text-[#94A3B8] border-[#243c63] hover:text-[#F0F9FF] hover:border-[#38BDF8]"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        {/* Bookings Cards */}
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-[#142037] border border-[#243c63] hover:border-[#38BDF8] transition-all rounded-2xl p-5 md:p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg font-extrabold text-[#F0F9FF]">
                      {booking.center}
                    </h3>
                    <span
                      className={`inline-flex items-center px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-full ${
                        statusStyles[booking.status]
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

                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs md:text-sm font-bold text-[#22D3EE] bg-[#1e2f4d] border border-[#243c63] px-3.5 py-2 rounded-xl">
                    📅 {booking.date} ({booking.time})
                  </span>

                  {booking.status === "Completed" &&
                    (booking.rating > 0 ? (
                      <span className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs md:text-sm font-extrabold">
                        ⭐ {booking.rating}/5
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={openratemodal}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white text-xs md:text-sm font-extrabold shadow-md shadow-blue-700/30 hover:brightness-110 transition-all cursor-pointer"
                      >
                        <span>⭐</span>
                        <span>Rate Visit</span>
                      </button>
                    ))}

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-xl border text-xs md:text-sm font-bold transition-all cursor-pointer ${
                      booking.status === "Pending" ||
                      booking.status === "Confirmed"
                        ? "bg-[#1e2f4d]/60 hover:bg-red-500/15 border-[#243c63] hover:border-red-500/50 text-red-400"
                        : "bg-[#1e2f4d]/60 hover:bg-[#1e2f4d] border-[#243c63] hover:border-[#38BDF8] text-[#94A3B8] hover:text-[#F0F9FF]"
                    }`}
                  >
                    {booking.status === "Pending" ||
                    booking.status === "Confirmed"
                      ? "Cancel"
                      : "Dismiss"}
                  </button>
                </div>
              </div>

              {/* Allow the customer to Rate if the booking is completed and not yet rated */}
              {booking.status === "Completed" &&
                booking.rating === 0 &&
                israteopen && (
                  <div className="fixed inset-0 z-50 bg-[#080d1a]/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[#142037] border border-[#243c63] text-[#F0F9FF] rounded-2xl max-w-lg w-full p-6 shadow-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-black">
                          ⭐ Rate Visit: {booking.center}
                        </h3>
                        <button
                          type="button"
                          onClick={() => setIsrateopen(false)}
                          className="text-[#94A3B8] hover:text-white text-lg font-bold cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>

                      {/* The input Form */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setIsrateopen(false);
                        }}
                        className="space-y-4"
                      >
                        <p className="text-sm text-[#94A3B8]">
                          How was your service experience for your{" "}
                          <span className="text-[#F0F9FF] font-bold">
                            {booking.car}
                          </span>
                          ? Your rating helps other drivers choose reliable
                          centers.
                        </p>
                        <div>
                          <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                            Select Rating (1 to 5 Stars)
                          </label>
                          <div className="flex items-center gap-2 text-3xl text-yellow-400">
                            <span className="cursor-pointer hover:scale-110 transition-transform">
                              ★
                            </span>
                            <span className="cursor-pointer hover:scale-110 transition-transform">
                              ★
                            </span>
                            <span className="cursor-pointer hover:scale-110 transition-transform">
                              ★
                            </span>
                            <span className="cursor-pointer hover:scale-110 transition-transform">
                              ★
                            </span>
                            <span className="cursor-pointer hover:scale-110 transition-transform">
                              ★
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#94A3B8] mb-1.5">
                            Feedback / Review (Optional)
                          </label>
                          <textarea
                            placeholder="Share your feedback about service quality and timing..."
                            className="w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl p-3 text-sm h-24 resize-none"
                          />
                        </div>
                        <div className="flex justify-end gap-2.5 pt-2">
                          <button
                            type="button"
                            onClick={() => setIsrateopen(false)}
                            className="px-4 py-2 rounded-xl bg-[#1e2f4d] border border-[#243c63] text-[#94A3B8] hover:text-white text-sm font-bold cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] text-white text-sm font-extrabold shadow-lg shadow-blue-700/30 hover:brightness-110 cursor-pointer"
                          >
                            Submit Rating
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

              {/* The rejection note */}
              {booking.status === "Rejected" && booking.rejectReason && (
                <div className="mt-4 p-3.5 rounded-xl bg-red-500/10 border border-dashed border-red-500/45 text-sm text-red-200">
                  <strong className="text-red-400 font-extrabold">
                    Center Rejection Reason:
                  </strong>{" "}
                  &ldquo;{booking.rejectReason}&rdquo;
                </div>
              )}
              {booking.status === "Completed" && booking.review && (
                <div className="mt-4 px-4 py-2.5 rounded-xl bg-[#1e2f4d] border border-[#243c63] text-xs md:text-sm text-[#94A3B8]">
                  <strong className="text-[#22D3EE]">Your review:</strong>{" "}
                  {booking.review}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
