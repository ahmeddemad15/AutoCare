import { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#243c63] bg-[#0f162a]">
      {/* Main Navbar */}
      <div className="mx-auto flex h-14 w-full max-w-[960px] items-center gap-3 px-4 sm:px-6 lg:gap-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-extrabold tracking-wide text-[#f0f9ff]"
        >
          AUTO<span className="text-[#38bdf8]">CARE</span>
        </NavLink>

        {/* Desktop Logout */}
        <div className="ml-auto flex items-center gap-2 text-[11px] font-bold">
          <NavLink
            to="/"
            className="hidden cursor-pointer rounded-lg border border-transparent bg-linear-to-br from-[#38bdf8] to-[#2563eb] px-3 py-1.5 text-white shadow-[0_4px_14px_rgba(37,99,235,0.45)] lg:block"
          >
            Logout
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="grid size-8 cursor-pointer place-items-center rounded-lg border border-[#243c63] bg-[#16223b] text-sm text-[#94a3b8] lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="border-t border-[#243c63] lg:hidden">
          <div className="mx-auto w-full max-w-[960px] px-4 py-3 sm:px-6">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-2 py-2.5 text-sm font-bold text-[#f0f9ff]"
            >
              Logout
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminNavbar;
