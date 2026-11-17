import React, { useState } from "react";
import Car_Card from "./Car_Card";

/* ---------- shared Tailwind class strings ---------- */
const controlBase =
  "w-full rounded-2xl border border-[#243c63] bg-[#0F172A] px-5 text-[15px] font-semibold text-[#F0F9FF] outline-none transition [color-scheme:dark] placeholder:font-normal placeholder:text-[#94A3B8] hover:border-[#35507f] focus:border-[#38BDF8] focus:shadow-[0_0_0_3px_rgba(56,189,248,0.22),0_0_18px_rgba(56,189,248,0.25)]";
const filterControl = `${controlBase} h-[62px]`;
const filterSelect = `${filterControl} cb-select cursor-pointer appearance-none pe-12`;

const modalLabel = "block text-xs font-bold text-[#94A3B8] mb-1.5";
const modalControl =
  "w-full bg-[#0F172A] border border-[#243c63] focus:outline-none focus:border-[#38BDF8] text-[#F0F9FF] rounded-xl px-3.5 py-2.5 text-sm font-semibold [color-scheme:dark]";
const modalSelect = `${modalControl} cb-select cursor-pointer appearance-none pe-10`;

const Centers_Booking = () => {
  /* ---------- static lists ---------- */
  const vehicles = ["BMW 4M", "Toyota Fortuner"];
  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];
  const sortOptions = [
    { value: "rating", label: "⭐ Top Rated" },
    { value: "price", label: "Lowest Price" },
    { value: "reviews", label: "Most Reviewed" },
  ];

  /* ---------- state ---------- */
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedCenter, setSelectedCenter] = useState(null); // booking modal
  const [confirmedCenter, setConfirmedCenter] = useState(null); // success banner
  const [items] = useState([
    {
      id: 1,
      name: "Auto Performance Center - Shorouk",
      area: "Fifth Settlement",
      rating: 4.9,
      reviewsCount: 120,
      services: [
        "Wheel Alignment",
        "Computer Diagnostics",
        "Periodic Maintenance",
      ],
      startingPrice: 350,
      currency: "EGP",
      icon: "drop",
    },
    {
      id: 2,
      name: "Grand Auto Car Wash & Nano Protection",
      area: "Sheikh Zayed",
      rating: 4.8,
      reviewsCount: 210,
      services: ["Nano Ceramic", "Detailing"],
      startingPrice: 500,
      currency: "EGP",
      icon: "sparkle",
    },
    {
      id: 3,
      name: "Fast Center for A/C & Suspension",
      area: "Nasr City",
      rating: 4.7,
      reviewsCount: 85,
      services: ["Brakes", "Suspension", "A/C"],
      startingPrice: 200,
      currency: "EGP",
      icon: "snowflake",
    },
  ]);

  /* ---------- region options + filter + sort ---------- */
  const regions = [...new Set(items.map((c) => c.area))];
  const query = search.trim().toLowerCase();

  const visibleCenters = items
    .filter((c) => {
      const matchesSearch =
        !query ||
        c.name.toLowerCase().includes(query) ||
        c.services.some((s) => s.toLowerCase().includes(query));
      const matchesRegion = region === "all" || c.area === region;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => {
      if (sortBy === "price") return a.startingPrice - b.startingPrice;
      if (sortBy === "reviews") return b.reviewsCount - a.reviewsCount;
      return b.rating - a.rating;
    });

  /* ---------- handlers: one function per action ---------- */
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const openBooking = (center) => {
    setSelectedCenter(center);
  };

  const closeBooking = () => {
    setSelectedCenter(null);
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    if (!selectedCenter) return; // nothing selected, nothing to confirm
    setConfirmedCenter(selectedCenter.name);
    setSelectedCenter(null);
  };

  const dismissConfirmation = () => {
    setConfirmedCenter(null);
  };

  return (
    <div className="cb-root min-h-screen bg-[#0F172A] text-[#F0F9FF] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* ---------- success banner ---------- */}
        {confirmedCenter && (
          <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl border border-[#22D3EE]/40 bg-[#22D3EE]/10 px-5 py-3.5 text-sm font-bold text-[#22D3EE]">
            <span>
              ✅ Booking request sent to {confirmedCenter}. We'll confirm your
              slot shortly.
            </span>
            <button
              type="button"
              onClick={dismissConfirmation}
              className="text-lg font-bold text-[#94A3B8] hover:text-white cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* ---------- filter bar ---------- */}
        <div className="mb-8 grid gap-4 rounded-3xl border border-[#243c63] bg-[#142037] p-4 md:grid-cols-3 md:p-5">
          <label className="relative block">
            <span className="pointer-events-none absolute start-5 top-1/2 -translate-y-1/2 text-base">
              🔍
            </span>
            <input
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search by name or service type..."
              className={`${filterControl} ps-12`}
            />
          </label>

          <select
            value={region}
            onChange={handleRegion}
            aria-label="Region"
            className={filterSelect}
          >
            <option value="all">All Regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={handleSort}
            aria-label="Sort by"
            className={filterSelect}
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* ---------- cards ---------- */}
        {visibleCenters.length === 0 ? (
          <div className="rounded-3xl border border-[#243c63] bg-[#142037] py-16 text-center text-[#94A3B8]">
            <p className="text-lg font-bold text-[#F0F9FF]">No centers found</p>
            <p className="mt-1 text-sm">Try a different search or region.</p>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCenters.map((center) => (
              <Car_Card key={center.id} item={center} onBook={openBooking} />
            ))}
          </div>
        )}

        {/* ---------- booking modal ---------- */}
        {selectedCenter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080d1a]/80 p-4 backdrop-blur-sm">
            <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#243c63] bg-[#142037] p-6 text-[#F0F9FF] shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-black">📅 Book an Appointment</h3>
                <button
                  type="button"
                  onClick={closeBooking}
                  className="cursor-pointer text-lg font-bold text-[#94A3B8] hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* selected center summary */}
              <div className="cb-summary mb-5 rounded-xl border border-[#38BDF8]/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Selected center
                </p>
                <p className="mt-1 text-base font-bold leading-snug">
                  {selectedCenter.name}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-num font-bold text-[#38BDF8]">
                    ★ {selectedCenter.rating}
                  </span>
                  <span className="text-[#94A3B8]">•</span>
                  <span className="cb-area font-bold italic text-[#38BDF8]">
                    {selectedCenter.area}
                  </span>
                  <span className="text-[#94A3B8]">•</span>
                  <span className="font-num font-semibold text-[#94A3B8]">
                    From{" "}
                    <strong className="text-[#22D3EE]">
                      {selectedCenter.startingPrice} {selectedCenter.currency}
                    </strong>
                  </span>
                </div>
              </div>

              <form onSubmit={confirmBooking} className="space-y-4">
                <div>
                  <label className={modalLabel}>Service</label>
                  <select required defaultValue="" className={modalSelect}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {selectedCenter.services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={modalLabel}>Vehicle</label>
                  <select required defaultValue="" className={modalSelect}>
                    <option value="" disabled>
                      Select your vehicle
                    </option>
                    {vehicles.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className={modalLabel}>Date</label>
                    <input type="date" required className={modalControl} />
                  </div>

                  <div>
                    <label className={modalLabel}>Time</label>
                    <select required defaultValue="" className={modalSelect}>
                      <option value="" disabled>
                        Select a time
                      </option>
                      {times.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={modalLabel}>Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="01X XXXX XXXX"
                    className={modalControl}
                  />
                </div>

                <div>
                  <label className={modalLabel}>Notes (optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Anything we should know about your car?"
                    className={`${modalControl} resize-y`}
                  />
                </div>

                <div className="flex justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="cursor-pointer rounded-xl border border-[#243c63] bg-[#1e2f4d] px-4 py-2 text-sm font-bold text-[#94A3B8] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="cursor-pointer rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] px-5 py-2 text-sm font-extrabold text-white shadow-lg shadow-blue-700/30 hover:brightness-110"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Centers_Booking;
