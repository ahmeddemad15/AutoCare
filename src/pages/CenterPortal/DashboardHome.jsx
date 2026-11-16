import { Link } from 'react-router-dom'

import StatCard from './components/center/StatCard'
import RecentBookings from './components/center/RecentBookings'
import StatusOverview from './components/center/StatusOverview'
import TopServices from './components/center/TopServices'
import StatusBadge from './components/center/StatusBadge'
import { BOOKING_STATUSES } from './dummyData'

const DashboardHome = ({ centerInfo, bookings, services }) => {
  const totalBookings = bookings.length
  const pendingBookings = bookings.filter((b) => b.status === 'Pending').length
  const completedBookings = bookings.filter((b) => b.status === 'Completed').length
  const totalServices = services.length

  return (
    <div className="flex flex-col gap-6">

      {/* Welcome banner */}
      <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 sm:p-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-extrabold sm:text-2xl">{centerInfo.name}</h2>
            <StatusBadge status="Confirmed" />
          </div>
          <p className="mt-1 text-sm text-(--cp-muted)">
            {centerInfo.branch} • Hours: {centerInfo.hours} • Phone: {centerInfo.phone}
          </p>
          <p className="mt-2 text-xs font-bold text-amber-500">
          </p>
        </div>

        <Link
          to="/center-portal/settings"
          className="rounded-lg border-[1.5px] border-(--cp-accent) px-4 py-2 text-sm font-extrabold text-(--cp-accent) transition hover:bg-(--cp-accent)/10"
        >
          ⚙️ Center Settings
        </Link>
      </section>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Bookings" value={totalBookings} icon="📋" />
        <StatCard label="Pending Bookings" value={pendingBookings} icon="⏳" />
        <StatCard label="Completed Bookings" value={completedBookings} icon="✅" />
        <StatCard label="Total Services" value={totalServices} icon="🛠️" />
      </div>

      {/* Main sections */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentBookings bookings={bookings} />
        </div>

        <div className="flex flex-col gap-6">
          <StatusOverview bookings={bookings} statuses={BOOKING_STATUSES} />
          <TopServices services={services} />
        </div>
      </div>

    </div>
  )
}

export default DashboardHome