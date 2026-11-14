import { Card } from "@heroui/react";

// One statistic card (HeroUI Card). Props: icon (element), label, value (number).
function AdminStatCard({ icon, label, value }) {
  return (
    <Card className="rounded-2xl border border-[#223457] bg-[#10203d] p-4 text-slate-100 shadow-none">
      <div className="flex items-center gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#223457] bg-[#0f2a4a] text-sky-400">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="mb-1 text-xs font-semibold text-slate-400">{label}</p>
          <p className="text-xl font-bold">{value.toLocaleString("en-US")}</p>
        </div>
      </div>
    </Card>
  );
}

export default AdminStatCard;
