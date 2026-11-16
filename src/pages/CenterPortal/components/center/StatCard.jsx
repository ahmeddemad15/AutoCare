const StatCard = ({ label, value, icon }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 transition hover:-translate-y-0.5 hover:border-(--cp-accent)">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-(--cp-line) bg-(--cp-accent)/10 text-xl">
        {icon}
      </div>
      <div className="min-w-0">
        <small className="block truncate text-xs font-bold text-(--cp-muted)">{label}</small>
        <b className="text-2xl font-black">{value}</b>
      </div>
    </div>
  )
}

export default StatCard