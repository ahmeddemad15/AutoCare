import React from "react";

const OIL_LIMIT = 10000;

const DEFAULT_VEHICLES = [
  { id: 1, name: "BMW 4M", plate: "1234 أ ب ج", km: 42500, oilUsed: 0 },
  {
    id: 2,
    name: "Toyota Fortuner",
    plate: "5678 س ص ع",
    km: 88100,
    oilUsed: 0,
  },
];

// Fonts (Tailwind arbitrary font families)
const HEAD = "font-['Tajawal','Cairo',sans-serif]";

export default function Dashboard({
  vehicles = DEFAULT_VEHICLES,
  openBookings = 1,
  totalExpenses = 3800,
  oilStatus = "All Optimal",
}) {
  const kpis = [
    { label: "Active Garage", value: vehicles.length, icon: "🚘" },
    { label: "Open Bookings", value: openBookings, icon: "📅" },
    {
      label: "Total Expenses",
      value: `${Number(totalExpenses).toLocaleString("en-US")} EGP`,
      icon: "🧾",
    },
    { label: "Oil Status", value: oilStatus, icon: "🔔", accent: true },
  ];

  return (
    <>
      {/* KPI cards */}
      <section
        aria-label="Summary"
        className="mb-[35px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {kpis.map((k) => (
          <div
            key={k.label}
            className="flex items-center gap-5 rounded-[22px] border border-[#243c63] bg-[#142037] px-6 py-7 transition duration-200 hover:-translate-y-0.5 hover:border-[#38BDF8]"
          >
            <div
              aria-hidden="true"
              className="grid h-[60px] w-[60px] flex-none place-items-center rounded-2xl border border-[rgba(56,189,248,0.25)] bg-[rgba(56,189,248,0.12)] text-[28px]"
            >
              {k.icon}
            </div>
            <div>
              <small className="block text-sm font-bold text-[#94A3B8]">
                {k.label}
              </small>
              <b
                className={`${HEAD} mt-1 block text-[26px] font-black leading-tight ${
                  k.accent ? "text-[#22D3EE]" : "text-[#F0F9FF]"
                }`}
              >
                {k.value}
              </b>
            </div>
          </div>
        ))}
      </section>

      {/* Vehicles status */}
      <section className="rounded-[26px] border border-[#243c63] bg-[#142037] px-7 pb-7 pt-8">
        <h2 className={`${HEAD} mb-10 text-2xl font-extrabold tracking-tight`}>
          Your Vehicles Status
        </h2>

        <div className="space-y-[26px]">
          {vehicles.map((v) => {
            const used = v.oilUsed ?? 0;
            const pct = Math.min(100, Math.round((used / OIL_LIMIT) * 100));
            const hot = pct >= 85;
            const left = Math.max(0, OIL_LIMIT - used);

            return (
              <div key={v.id}>
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <div className="flex items-baseline gap-2">
                    <span
                      aria-hidden="true"
                      className="mr-0.5 self-center text-[17px]"
                    >
                      🚘
                    </span>
                    <span className={`${HEAD} text-xl font-extrabold`}>
                      {v.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[11px] text-[#94A3B8]"
                    >
                      ▪
                    </span>
                    <span className="text-[15px] text-[#94A3B8]">
                      {v.plate}
                    </span>
                  </div>
                  <span className="text-[15px] font-semibold text-[#94A3B8]">
                    {Number(v.km).toLocaleString("en-US")} KM
                  </span>
                </div>

                <div
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${v.name} oil life used`}
                  className="mb-[18px] mt-[22px] h-[9px] overflow-hidden rounded-full bg-[#2a4271]"
                >
                  <i
                    className={`block h-full rounded-full ${
                      hot
                        ? "bg-red-500"
                        : "bg-gradient-to-r from-[#1D4ED8] to-[#38BDF8]"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <span
                  className={`text-[15.5px] font-bold ${hot ? "text-red-500" : "text-[#29b6f6]"}`}
                >
                  {hot
                    ? "⚠️ Service Required"
                    : `${left.toLocaleString("en-US")} km left`}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
