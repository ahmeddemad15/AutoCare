import getInitials from "../../pages/CenterPortal/components/getInitials";

const CENTER_ROLE = "Center Admin";

const CenterNavbar = ({
  toggleSidebar,
  title = "Center Dashboard",
  theme = "dark",
  toggleTheme,
  centerName = "Your Center",
}) => {
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between gap-3 border-b border-(--cp-line) bg-(--cp-header) px-4 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Left side: hamburger + logo + page title */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-(--cp-line) bg-(--cp-surface) text-(--cp-text) transition hover:border-(--cp-accent)"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo: hidden on very small screens to avoid overlapping */}
        <span className="cp-logo hidden text-2xl font-black tracking-wide sm:block">
          AUTO<span className="text-(--cp-accent)">CARE</span>
        </span>

        <div className="hidden h-8 w-px bg-(--cp-line) sm:block" />

        {/* Page title + welcome message */}
        <div className="min-w-0">
          <h1 className="truncate text-base font-extrabold sm:text-lg">
            {title}
          </h1>
          <p className="hidden text-sm text-(--cp-muted) lg:block">
            Welcome back, {centerName}
          </p>
        </div>
      </div>

      {/* Right side: theme + notifications + divider + profile */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle light and dark theme"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-(--cp-line) bg-(--cp-surface) text-lg transition hover:border-(--cp-accent)"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          aria-label="Notifications"
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-(--cp-line) bg-(--cp-surface) text-(--cp-text) transition hover:border-(--cp-accent)"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
            />
          </svg>
          <span className="absolute end-1.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-(--cp-surface) bg-red-500" />
        </button>

        <div className="hidden h-8 w-px bg-(--cp-line) sm:block" />

        {/* Center profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-(--cp-accent) to-(--cp-blue) text-sm font-extrabold text-white">
            {getInitials(centerName)}
          </div>

          <div className="hidden leading-tight md:block">
            <p className="text-sm font-bold">{centerName}</p>
            <p className="text-xs text-(--cp-muted)">{CENTER_ROLE}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default CenterNavbar;
