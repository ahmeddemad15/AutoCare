import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Operations from "./pages/Operations.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/services" element={<Operations />} />
        <Route path="*" element={<Navigate to="/services" replace />} />
      </Routes>
    </>
  );
}
