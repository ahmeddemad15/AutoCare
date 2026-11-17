import { useState, useEffect, useRef } from "react";

const RejectModal = ({ booking, onCancel, onConfirm }) => {
  const [reason, setReason] = useState("");
  const dialogRef = useRef(null);
  const isReasonValid = reason.trim().length > 0;

  // Open the native dialog as a modal as soon as the component mounts
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  // Esc key: let React close it by unmounting instead of the browser hiding it
  const handleNativeCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleNativeCancel}
      aria-labelledby="reject-title"
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-6 text-(--cp-text) backdrop:bg-black/60"
    >
      <h3 id="reject-title" className="text-lg font-extrabold">
        {" "}
        Reject booking{" "}
      </h3>
      <p className="mt-1 text-sm text-(--cp-muted)">
        {booking.car} — {booking.service} ({booking.customer})
      </p>

      <label htmlFor="reject-reason" className="mt-4 block text-sm font-bold">
        {" "}
        Reason (the customer will see it)
      </label>
      <textarea
        id="reject-reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        rows={4}
        autoFocus
        placeholder="e.g. No free bay at this time, please choose another slot."
        className="mt-2 w-full rounded-lg border border-(--cp-line) bg-(--cp-bg) p-3 text-sm text-(--cp-text) outline-none focus:border-(--cp-accent) focus:ring-2 focus:ring-(--cp-accent)/25"
      />

      <div className="mt-5 flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-lg border border-(--cp-line) px-4 py-2 text-sm font-bold text-(--cp-muted) transition hover:border-(--cp-accent) hover:text-(--cp-text)"
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={!isReasonValid}
          onClick={() => onConfirm(reason.trim())}
          className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm font-extrabold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Reject booking
        </button>
      </div>
    </dialog>
  );
};
export default RejectModal;
