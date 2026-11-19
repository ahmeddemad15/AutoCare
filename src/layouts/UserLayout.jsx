import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Owner from "../pages/Owner/Owner";
import CenterPortal from "../pages/CenterPortal/CenterPortal";
import NotFound from "../pages/NotFound/NotFound";

export default function UserLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="Owner/*" element={<Owner />} />
          <Route path="center-portal/*" element={<CenterPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
