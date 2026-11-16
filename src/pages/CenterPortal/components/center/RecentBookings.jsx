import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'

const RecentBookings = ({ bookings, limit = 5 }) => {
  const recent = bookings.slice(0, limit)

  return (
    <section className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-extrabold">📥 Recent Bookings</h3>
        <Link
          to="/center-portal/bookings"
          className="text-sm font-bold text-(--cp-accent) hover:underline"
        >
          View all
        </Link>
      </div>

      {recent.length === 0 ? (
        <p className="py-8 text-center text-(--cp-muted)">No bookings yet.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {recent.map((booking) => (
            <li
              key={booking.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-(--cp-surface-2) px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate font-bold">
                  {booking.car} — {booking.service}
                </p>
                <p className="text-sm text-(--cp-muted)">
                  {booking.customer} • {booking.date} ({booking.time})
                </p>
              </div>
              <StatusBadge status={booking.status} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default RecentBookings