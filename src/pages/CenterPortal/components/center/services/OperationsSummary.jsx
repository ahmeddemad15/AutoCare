const SUMMARY_ITEMS = [
  {
    label: "Total Branches",
    detail: "Across your service network",
    icon: "BR",
    value: (branches) => branches.length,
  },
  {
    label: "Active Locations",
    detail: "Visible to customers",
    icon: "ON",
    value: (branches) =>
      `${branches.filter((branch) => branch.active).length} / ${branches.length}`,
  },
  {
    label: "Service Bays",
    detail: "Across all branches",
    icon: "BAY",
    value: (branches) =>
      branches.reduce((total, branch) => total + Number(branch.bays), 0),
  },
  {
    label: "Daily Booking Limit",
    detail: "Maximum appointments per day",
    icon: "DAY",
    value: (branches) =>
      branches.reduce((total, branch) => total + Number(branch.limit), 0),
  },
];

const OperationsSummary = ({ branches }) => (
  <section
    className="mb-8 grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 xl:grid-cols-4"
    aria-label="Operations summary"
  >
    {SUMMARY_ITEMS.map((item) => (
      <article
        key={item.label}
        className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 shadow-lg shadow-black/10"
      >
        <div className="mb-4 flex items-start justify-between">
          <span className="text-sm font-bold text-(--cp-muted)">
            {item.label}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--cp-line) bg-(--cp-surface-2) text-[10px] font-extrabold tracking-wide text-(--cp-accent)">
            {item.icon}
          </span>
        </div>
        <div className="text-3xl font-bold tracking-tight text-(--cp-text)">
          {item.value(branches)}
        </div>
        <p className="mt-1 text-xs text-(--cp-muted)">{item.detail}</p>
      </article>
    ))}
  </section>
);

export default OperationsSummary;
