import { Routes, Route } from "react-router-dom";

import AuthProvider from "./context/Authentication/AuthProvider";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/platform-administration/*" element={<AdminLayout />} />
        <Route path="/*" element={<UserLayout />} />
      </Routes>
    </AuthProvider>
  );
}
