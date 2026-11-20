import { Routes, Route } from "react-router-dom";

import AuthProvider from "./context/Authentication/AuthProvider";
import UserLayout from "./layouts/UserLayout";
import CenterPortal from "./pages/CenterPortal/CenterPortal";
import AdminLayout from "./layouts/AdminLayout";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/platform-administration/*" element={<AdminLayout />} />
        <Route path="/center-portal/*" element={<CenterPortal />} />
        <Route path="/*" element={<UserLayout />} />
      </Routes>
    </AuthProvider>
  );
}
