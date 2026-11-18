import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Owner", to: "/owner" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex min-h-[78px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:gap-5 sm:px-8">
        <NavLink
          to="/"
          className="shrink-0 text-lg font-extrabold sm:text-[23px] tracking-tight text-slate-900"
        >
          AUTO<span className="text-blue-700">CARE</span>
        </NavLink>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                "text-sm font-semibold transition hover:text-blue-700 " +
                (isActive ? "text-blue-700" : "text-slate-600")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/login"
            className="rounded-lg border border-blue-700 whitespace-nowrap px-2.5 py-2 text-[11px] font-semibold text-blue-700 sm:px-4 sm:py-2.5 sm:text-sm transition hover:bg-blue-50"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="rounded-lg bg-blue-700 whitespace-nowrap px-2.5 py-2 text-[11px] font-semibold text-white sm:px-4 sm:py-2.5 sm:text-sm transition hover:bg-blue-800"
          >
            Get Started
          </a>
        </div>
      </nav>
      <div className="flex gap-5 overflow-x-auto border-t border-slate-100 px-4 py-2.5 md:hidden">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              "whitespace-nowrap text-xs font-semibold " +
              (isActive ? "text-blue-700" : "text-slate-500")
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
