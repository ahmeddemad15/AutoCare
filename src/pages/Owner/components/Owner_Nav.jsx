import React from "react";
import { NavLink } from "react-router-dom";

const HEAD = "font-['Tajawal','Cairo',sans-serif]";

const TABS = [
  { path: "Dashboard", label: "Dashboard", icon: "🏠" },
  { path: "Centers_and_Booking", label: "Centers & Booking", icon: "🔍" },
  { path: "Appointment", label: "Appointments", icon: "📅" },
  { path: "Financial_Log", label: "Financial Log", icon: "📊" },
];

const Owner_Nav = ({ basePath = "" }) => {
  return (
    <nav
      aria-label="Garage sections"
      className="flex w-full items-center gap-[5px] overflow-x-auto rounded-[18px] border border-[#29415f] bg-[#080f1e] p-1.5"
    >
      {TABS.map((t) => (
        <NavLink
          key={t.path}
          to={`/Owner/${t.path}`}
          className={({ isActive }) =>
            `${HEAD} inline-flex h-12 flex-none items-center gap-2 whitespace-nowrap rounded-[14px] border px-3.5 text-sm font-extrabold no-underline transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38BDF8] sm:h-[65px] sm:px-8 sm:text-[18px] ${
              isActive
                ? "border-[#7dd3fc] bg-gradient-to-r from-[#2879f5] to-[#29b6f6] text-white shadow-[0_0_0_2px_rgba(255,255,255,0.9),0_4px_14px_rgba(41,182,246,0.24)]"
                : "border-transparent bg-transparent text-[#94a3b8] hover:bg-[rgba(148,163,184,0.08)] hover:text-slate-100"
            }`
          }
        >
          <span aria-hidden="true" className="text-[18px] leading-none">
            {t.icon}
          </span>
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Owner_Nav;
