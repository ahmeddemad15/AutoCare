import { useState, useEffect } from 'react'

const RejectModal = ({ booking, onCancel, onConfirm }) => {
    const [reason, setReason] = useState('')
    const isReasonValid = reason.trim().length > 0

  // Close the modal when the Escape key is pressed
    useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') onCancel()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onCancel])

    return (
        <div onClick={onCancel} className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4">
       {/* stopPropagation: clicking inside the box must not close the modal */}
            <div onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" className="w-full max-w-md rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-6">
                <h3 className="text-lg font-extrabold">Reject booking</h3>
                <p className="mt-1 text-sm text-(--cp-muted)">
                    {booking.car} — {booking.service} ({booking.customer})
                </p>

                <label htmlFor="reject-reason" className="mt-4 block text-sm font-bold">
                    Reason (the customer will see it)
                </label>
                <textarea id="reject-reason" value={reason} onChange={(e) => setReason(e.target.value)} rows={4} autoFocus placeholder="e.g. No free bay at this time, please choose another slot." className="mt-2 w-full rounded-lg border border-(--cp-line) bg-(--cp-bg) p-3 text-sm text-(--cp-text) outline-none focus:border-(--cp-accent) focus:ring-2 focus:ring-(--cp-accent)/25" />

                <div className="mt-5 flex justify-end gap-3">
                    <button type="button" onClick={onCancel}
                    className="cursor-pointer rounded-lg border border-(--cp-line) px-4 py-2 text-sm font-bold text-(--cp-muted) transition hover:border-(--cp-accent) hover:text-(--cp-text)">
                        Cancel
                    </button>
                    <button type="button" disabled={!isReasonValid} onClick={() => onConfirm(reason.trim())}
                    className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm font-extrabold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40">
                        Reject booking
                    </button>
                </div>
            </div>
        </div>
    )
}
export default RejectModal