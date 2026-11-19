const BAR_COLORS = {
  Pending: "bg-amber-500",
  Confirmed: "bg-sky-500",
  Completed: "bg-emerald-500",
  Rejected: "bg-red-500",
};

const StatusOverview = ({ bookings, statuses }) => {
  const total = bookings.length;

  return (
    <section className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5">
      <h3 className="mb-4 text-lg font-extrabold">📊 Booking Status</h3>

      <ul className="flex flex-col gap-4">
        {statuses.map((status) => {
          const count = bookings.filter((b) => b.status === status).length;
          const percent = total === 0 ? 0 : Math.round((count / total) * 100);

          return (
            <li key={status}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-bold">{status}</span>
                <span className="text-(--cp-muted)">
                  {count} ({percent}%)
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-(--cp-surface-2)">
                <div
                  className={`h-full rounded-full ${BAR_COLORS[status]}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StatusOverview;
