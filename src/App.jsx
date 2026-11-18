import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Owner from "./pages/Owner/Owner";
import CenterPortal from "./pages/CenterPortal/CenterPortal";
import PlatformAdministration from "./pages/platformAdministration/PlatformAdministration";

import Layout from "./components/layout/Layout";
import AuthLayout from "./components/layout/AuthLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Auth pages - no navbar */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Public pages - with navbar */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Protected pages - with navbar, must be logged in */}
      <Route element={<Layout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/center-portal" element={<CenterPortal />} />
          <Route path="/Owner/*" element={<Owner />} />
          <Route path="/platform-administration" element={<PlatformAdministration />} />
        </Route>
      </Route>
    </Routes>
  );
}
