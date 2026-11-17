const TopServices = ({ services, limit = 4 }) => {
  const top = [...services]
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, limit);

  return (
    <section className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5">
      <h3 className="mb-4 text-lg font-extrabold">🛠️ Top Services</h3>

      <ul className="flex flex-col gap-3">
        {top.map((service, index) => (
          <li
            key={service.id}
            className="flex items-center justify-between gap-3 rounded-xl bg-(--cp-surface-2) px-4 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-linear-to-br from-(--cp-accent) to-(--cp-blue) text-xs font-black text-white">
                {index + 1}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">{service.name}</p>
                <p className="text-xs text-(--cp-muted)">{service.price} EGP</p>
              </div>
            </div>
            <span className="shrink-0 text-sm font-bold text-(--cp-accent)">
              {service.bookings} bookings
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TopServices;
