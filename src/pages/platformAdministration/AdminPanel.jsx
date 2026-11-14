import { Card } from "@heroui/react";

// Shared panel shell (HeroUI Card) used by the chart, reports and requests
// panels so they all look the same. Props: title, icon (element), children.
function AdminPanel({ title, icon, children }) {
  return (
    <Card className="min-w-0 rounded-2xl border border-[#223457] bg-[#10203d] p-5 text-slate-100 shadow-none sm:p-6">
      <h2 className="mb-5 flex items-center gap-2 text-base font-bold">
        <span className="text-sky-400" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h2>
      {children}
    </Card>
  );
}

export default AdminPanel;
