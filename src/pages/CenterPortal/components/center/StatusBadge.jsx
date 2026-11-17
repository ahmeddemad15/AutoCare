const STATUS_STYLES = {
  Pending: "border-amber-500/30 bg-amber-500/10 text-amber-500",
  Confirmed: "border-sky-400/35 bg-sky-400/10 text-sky-500",
  Completed: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500",
  Rejected: "border-red-500/30 bg-red-500/10 text-red-500",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold ${
        STATUS_STYLES[status] || STATUS_STYLES.Pending
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
