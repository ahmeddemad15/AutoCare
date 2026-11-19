import { Routes, Route } from "react-router-dom";

import PlatformAdministration from "../pages/platformAdministration/PlatformAdministration";
import NotFound from "../pages/NotFound/NotFound";

export default function AdminLayout() {
  return (
    <main className="min-h-screen">
      <Routes>
        <Route index element={<PlatformAdministration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
