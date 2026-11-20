import { useState } from "react";

import CenterNavbar from "../components/center/CenterNavbar";
import Sidebar from "../components/center/Sidebar";
import "./centerTheme.css";

const CenterLayout = ({ centerName, actionError, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div
      data-theme={theme}
      className="center-theme min-h-screen bg-(--cp-bg) text-(--cp-text)"
    >
      <CenterNavbar
        toggleSidebar={toggleSidebar}
        title="Center Portal"
        theme={theme}
        toggleTheme={toggleTheme}
        centerName={centerName}
      />

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div
        className={`transition-[margin] duration-300 ease-in-out ${
          isSidebarOpen ? "lg:ms-64" : ""
        }`}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          {actionError && (
            <p
              role="alert"
              className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-400"
            >
              {actionError}
            </p>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

export default CenterLayout;
