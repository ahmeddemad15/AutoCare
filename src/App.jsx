import { Routes, Route, useLocation} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Owner from "./pages/Onwer/Owner";
import CenterPortal from "./pages/CenterPortal/CenterPortal";
import PlatformAdministration from "./pages/platformAdministration/PlatformAdministration";

import Navbar from "./components/Navbar";

export default function App() {
  const location = useLocation();

  const isCenterPortal = location.pathname.startsWith("/center-portal");

  return (
    <div className="min-h-screen">
      {!isCenterPortal && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/center-portal/*" element={<CenterPortal />}/>
          <Route path="/Owner/*" element={<Owner/>}/>
          <Route
            path="/platform-administration"
            element={<PlatformAdministration />}
          />
        </Routes>
      </main>
    </div>
  );
}
