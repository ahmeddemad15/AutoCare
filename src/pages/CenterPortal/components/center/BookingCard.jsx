import { useState } from 'react'
import StatusBadge from './StatusBadge'

const BookingCard = ({ booking, isBusy = false, onConfirm, onReject, onComplete }) => {
    const [invoice, setInvoice] = useState('')
    const isInvoiceValid = invoice !== '' && Number(invoice) > 0

    return (
        <div className={`rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 transition hover:border-(--cp-accent) ${
        isBusy ? 'opacity-60' : ''
        }`}>
            <div className="flex flex-wrap items-center justify-between gap-4">

            {/* Booking info */}
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-base font-extrabold sm:text-lg">
                            {booking.car} — {booking.service}
                        </h4>
                        <StatusBadge status={booking.status} />
                    </div>

                    <p className="mt-1 text-sm text-(--cp-muted)">
                        Customer: <b className="text-(--cp-text)">{booking.customer}</b>
                    </p>
                    <p className="text-sm text-(--cp-muted)">
                        Appointment: <b className="text-(--cp-text)">{booking.date} ({booking.time})</b>
                    </p>

                    {booking.status === 'Rejected' && booking.rejectReason && (
                        <p className="mt-2 text-sm text-red-400">Reason: "{booking.rejectReason}"</p>
                    )}
                </div>

            {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                    {booking.status === 'Pending' && (
                        <>
                            <button type="button" disabled={isBusy} onClick={() => onConfirm(booking.id)}
                            className="cursor-pointer rounded-lg bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-4 py-2 text-sm font-extrabold text-white shadow-lg shadow-sky-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40">
                                {isBusy ? 'Saving...' : 'Accept'}
                            </button>
                            <button type="button" disabled={isBusy} onClick={() => onReject(booking)}
                            className="cursor-pointer rounded-lg border border-(--cp-line) px-4 py-2 text-sm font-bold text-red-400 transition hover:border-red-400 disabled:cursor-not-allowed disabled:opacity-40">
                                Reject
                            </button>
                        </>
                    )}

                    {booking.status === 'Confirmed' && (
                        <>
                            <input type="number" min="1" value={invoice} disabled={isBusy} onChange={(e) => setInvoice(e.target.value)} placeholder="Invoice (EGP)" aria-label="Invoice amount in EGP"
                            className="w-36 rounded-lg border border-(--cp-line) bg-(--cp-bg) px-3 py-2 text-sm text-(--cp-text) outline-none focus:border-(--cp-accent) focus:ring-2 focus:ring-(--cp-accent)/25 disabled:opacity-40"/>
                            <button type="button"disabled={!isInvoiceValid || isBusy}onClick={() => onComplete(booking.id, Number(invoice))}
                            className="cursor-pointer rounded-lg bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-4 py-2 text-sm font-extrabold text-white shadow-lg shadow-sky-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40">
                                {isBusy ? 'Saving...' : 'Deliver & Invoice'}
                            </button>
                        </>
                    )}

                    {booking.status === 'Completed' && (
                        <span className="text-sm font-bold text-(--cp-cyan)">
                            ✔️ Delivered{booking.invoice ? ` • ${booking.invoice} EGP` : ''}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
export default BookingCard