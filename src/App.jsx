import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CenterPortal from "./pages/CenterPortal/CenterPortal";
import Onwer from "./pages/Onwer/Onwer";
import PlatformAdministration from "./pages/platformAdministration/PlatformAdministration";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/center-portal" element={<CenterPortal />} />
          <Route path="/onwer" element={<Onwer />} />
          <Route
            path="/platform-administration"
            element={<PlatformAdministration />}
          />
        </Routes>
      </main>
    </div>
  );
}
