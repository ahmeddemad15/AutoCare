import FormField from "../FormField";
import { WEEKDAYS } from "../../../operationsData";

const BranchEditor = ({ branch, onChange }) => {
  const toggleDay = (day) => {
    const days = branch.days.includes(day)
      ? branch.days.filter((activeDay) => activeDay !== day)
      : [...branch.days, day];
    onChange("days", days);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) shadow-xl shadow-black/10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-(--cp-line) p-5 sm:p-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">{branch.name}</h2>
              <span className="rounded-md border border-(--cp-line) bg-(--cp-surface-2) px-2 py-1 text-[10px] font-bold tracking-wide text-(--cp-accent)">
                BRANCH
              </span>
            </div>
            <p className="mt-1 text-sm text-(--cp-muted)">{branch.address}</p>
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-xs font-bold">
            <input
              type="checkbox"
              checked={branch.active}
              onChange={(event) => onChange("active", event.target.checked)}
              className="h-4 w-4 accent-(--cp-accent)"
            />
            {branch.active ? "Active" : "Inactive"}
          </label>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
          <FormField
            id={`branch-${branch.id}-name`}
            label="Branch Name"
            value={branch.name}
            onChange={(event) => onChange("name", event.target.value)}
          />
          <FormField
            id={`branch-${branch.id}-manager`}
            label="Branch Manager"
            value={branch.manager}
            onChange={(event) => onChange("manager", event.target.value)}
          />
          <FormField
            id={`branch-${branch.id}-address`}
            label="Branch Address"
            value={branch.address}
            onChange={(event) => onChange("address", event.target.value)}
          />
          <FormField
            id={`branch-${branch.id}-phone`}
            label="Contact Number"
            type="tel"
            value={branch.phone}
            onChange={(event) => onChange("phone", event.target.value)}
          />
        </div>
      </section>

      <section
        id="capacity"
        className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) shadow-xl shadow-black/10"
      >
        <div className="border-b border-(--cp-line) p-5 sm:p-6">
          <h2 className="font-bold">Operational Capacity</h2>
          <p className="mt-1 text-xs text-(--cp-muted)">
            Set booking limits for this branch
          </p>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
          <FormField
            id={`branch-${branch.id}-bays`}
            label="Service Bays"
            type="number"
            min="1"
            value={branch.bays}
            onChange={(event) =>
              onChange("bays", Math.max(1, Number(event.target.value)))
            }
          />
          <FormField
            id={`branch-${branch.id}-limit`}
            label="Maximum Bookings per Day"
            type="number"
            min="1"
            value={branch.limit}
            onChange={(event) =>
              onChange("limit", Math.max(1, Number(event.target.value)))
            }
          />
        </div>
        <p className="mx-5 mb-5 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3.5 text-xs leading-5 text-amber-100 sm:mx-6 sm:mb-6">
          Booking limits help prevent overbooking. Keep the daily limit aligned
          with available bays and team size.
        </p>
      </section>

      <section
        id="hours"
        className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) shadow-xl shadow-black/10"
      >
        <div className="border-b border-(--cp-line) p-5 sm:p-6">
          <h2 className="font-bold">Working Hours</h2>
          <p className="mt-1 text-xs text-(--cp-muted)">
            Choose when customers can book
          </p>
        </div>
        <div className="p-5 sm:p-6">
          <p className="mb-3 text-sm font-bold">Operating Days</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {WEEKDAYS.map((day) => (
              <button
                key={day}
                type="button"
                aria-pressed={branch.days.includes(day)}
                onClick={() => toggleDay(day)}
                className={`cursor-pointer rounded-lg border px-3 py-2 text-xs font-bold transition ${
                  branch.days.includes(day)
                    ? "border-(--cp-accent) bg-(--cp-accent)/10 text-(--cp-accent)"
                    : "border-(--cp-line) text-(--cp-muted) hover:bg-(--cp-surface-2)"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              id={`branch-${branch.id}-open`}
              label="Opening Time"
              type="time"
              value={branch.open}
              onChange={(event) => onChange("open", event.target.value)}
            />
            <FormField
              id={`branch-${branch.id}-close`}
              label="Closing Time"
              type="time"
              value={branch.close}
              onChange={(event) => onChange("close", event.target.value)}
            />
          </div>
        </div>
      </section>

      <section
        id="center-settings"
        className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 sm:p-6"
      >
        <h2 className="font-bold">Service Center Settings</h2>
        <p className="mt-1 text-sm text-(--cp-muted)">
          Branch visibility and booking availability are controlled by the
          active status and hours above.
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm" role="status">
          <span
            className={
              branch.active ? "text-(--cp-accent)" : "text-(--cp-muted)"
            }
          >
            ●
          </span>
          <span className="text-(--cp-muted)">
            {branch.active
              ? "This branch is available to customers."
              : "This branch is hidden from customers."}
          </span>
        </div>
      </section>
    </div>
  );
};

export default BranchEditor;
