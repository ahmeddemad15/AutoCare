import { useState } from 'react'

import BookingCard from './components/center/BookingCard'
import RejectModal from './components/center/RejectModel'
import { BOOKING_STATUSES } from './dummyData'

const FILTERS = ['All', ...BOOKING_STATUSES]

const BookingsPage = ({
    bookings,
    busyBookingId,
    confirmBooking,
    rejectBooking,
    completeBooking,
}) => {
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')
    const [rejectingId, setRejectingId] = useState(null)

  // Find the booking being rejected from the list (null if none is selected)
    const bookingToReject = bookings.find((b) => b.id === rejectingId) || null

    const query = search.trim().toLowerCase()

  // 1) filter by status tab, 2) then by search text
    const visibleBookings = bookings
    .filter((b) => filter === 'All' || b.status === filter)
    .filter(
        (b) =>
            query === '' ||
            b.customer.toLowerCase().includes(query) ||
            b.car.toLowerCase().includes(query) ||
            b.service.toLowerCase().includes(query)
    )

  // Tab counters always count ALL bookings (they ignore the search box)
    const countFor = (name) =>
    name === 'All' ? bookings.length : bookings.filter((b) => b.status === name).length

    const handleRejectConfirm = (reason) => {
    if (rejectingId === null) return
    rejectBooking(rejectingId, reason)
    setRejectingId(null)
    }

    return (
        <div className="flex flex-col gap-6">

            <div>
                <h2 className="text-xl font-extrabold sm:text-2xl">📥 Incoming Bookings</h2>
                <p className="mt-1 text-xs font-bold text-amber-500">
                </p>
            </div>

        {/* Search */}
            <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer, car or service..."
            aria-label="Search bookings"
            className="w-full rounded-xl border border-(--cp-line) bg-(--cp-surface) px-4 py-3 text-sm text-(--cp-text) outline-none placeholder:text-(--cp-muted) focus:border-(--cp-accent) focus:ring-2 focus:ring-(--cp-accent)/25 sm:max-w-md"
            />

        {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
                {FILTERS.map((name) => (
                    <button
                    key={name}
                    type="button"
                    onClick={() => setFilter(name)}
                    className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-bold transition ${
                    filter === name
                    ? 'border-transparent bg-linear-to-br from-(--cp-accent) to-(--cp-blue) text-white shadow-lg shadow-sky-500/30'
                    : 'border-(--cp-line) bg-(--cp-surface) text-(--cp-muted) hover:border-(--cp-accent) hover:text-(--cp-text)'
                    }`}>
                        {name} ({countFor(name)})
                    </button>
                ))}
            </div>

        {/* Bookings list */}
            {visibleBookings.length === 0 ? (
                <p className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-10 text-center text-(--cp-muted)">
                    {query ? 'No bookings match your search.' : 'No bookings in this category.'}
                </p>
            ) : (
                <div className="grid gap-4">
                    {visibleBookings.map((booking) => (
                        <BookingCard
                        key={booking.id}
                        booking={booking}
                        isBusy={busyBookingId === booking.id}
                        onConfirm={confirmBooking}
                        onReject={(b) => setRejectingId(b.id)}
                        onComplete={completeBooking}
                        />
                    ))}
                </div>
            )}

            {bookingToReject && (
                <RejectModal
                booking={bookingToReject}
                onCancel={() => setRejectingId(null)}
                onConfirm={handleRejectConfirm}
                />
            )}
        </div>
    )
}
export default BookingsPage