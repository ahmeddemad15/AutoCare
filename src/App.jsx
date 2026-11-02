
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import NotFound from "./pages/Notfound";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* مؤقتًا لحد ما تعمل صفحة الكراج */}
        <Route path="/garage" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
