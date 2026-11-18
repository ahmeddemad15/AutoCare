import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Owner from "./pages/Owner/Owner";
import CenterPortal from "./pages/CenterPortal/CenterPortal";
import PlatformAdministration from "./pages/platformAdministration/PlatformAdministration";

import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/center-portal" element={<CenterPortal />} />
        <Route path="/Owner/*" element={<Owner />} />
        <Route
          path="/platform-administration"
          element={<PlatformAdministration />}
        />
      </Route>
    </Routes>
  );
}
