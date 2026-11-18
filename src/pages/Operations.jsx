import { useState } from "react";

const starter = [
  {
    id: 1,
    name: "Nasr City Branch",
    address: "Abbas El Akkad St., Cairo",
    manager: "Omar Hassan",
    phone: "+20 100 123 4567",
    bays: 8,
    limit: 24,
    open: "08:00",
    close: "22:00",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    active: true,
  },
  {
    id: 2,
    name: "Maadi Branch",
    address: "Road 9, Maadi, Cairo",
    manager: "Mariam Adel",
    phone: "+20 100 234 5678",
    bays: 5,
    limit: 16,
    open: "09:00",
    close: "21:00",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    active: true,
  },
  {
    id: 3,
    name: "New Cairo Branch",
    address: "South 90 St., New Cairo",
    manager: "Youssef Ali",
    phone: "+20 100 345 6789",
    bays: 10,
    limit: 30,
    open: "08:00",
    close: "23:00",
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    active: false,
  },
];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const loadBranches = () => {
  try {
    const saved = localStorage.getItem("autocare-operations-branches");
    return saved ? JSON.parse(saved) : starter;
  } catch {
    return starter;
  }
};
const inputClass =
  "w-full rounded-xl border border-[#29436b] bg-[#101c31] px-3.5 py-3 text-base text-white sm:text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10";

function Field({ label, value, onChange, type = "text", min }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>
      <input
        className={inputClass}
        type={type}
        min={min}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default function Operations() {
  const [branches, setBranches] = useState(loadBranches);
  const [selectedId, setSelectedId] = useState(() => loadBranches()[0]?.id);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [branchName, setBranchName] = useState("");
  const [saved, setSaved] = useState(false);
  const selected =
    branches.find((branch) => branch.id === selectedId) || branches[0];

  if (!selected) return null;

  const update = (key, value) => {
    setBranches((items) =>
      items.map((branch) =>
        branch.id === selected.id ? { ...branch, [key]: value } : branch,
      ),
    );
    setSaved(false);
  };
  const filtered = branches.filter((branch) =>
    (branch.name + " " + branch.address)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const addBranch = (event) => {
    event.preventDefault();
    if (!branchName.trim()) return;
    const item = {
      id: Date.now(),
      name: branchName.trim(),
      address: "Add branch address",
      manager: "Branch manager",
      phone: "+20",
      bays: 4,
      limit: 12,
      open: "09:00",
      close: "21:00",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      active: true,
    };
    setBranches((items) => [...items, item]);
    setSelectedId(item.id);
    setBranchName("");
    setShowAdd(false);
    setSaved(false);
  };

  return (
    <main className="min-h-[calc(100vh-118px)] bg-[#0b1324] md:min-h-[calc(100vh-78px)] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-8 sm:py-10 lg:py-14">
        <div className="mb-7">
          <p className="mb-3 text-sm font-medium text-[#29c7f7]">
            Service Center / Services
          </p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-[28px] leading-tight font-bold tracking-tight min-[400px]:text-3xl sm:text-[42px]">
                Service Center Operations
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
                Manage branches, capacity, and working hours across your service
                network.
              </p>
            </div>
            <button
              onClick={() => setShowAdd(true)}
              className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-600"
            >
              + Add Branch
            </button>
          </div>
        </div>

        <nav
          aria-label="Service center sections"
          className="mb-8 flex gap-2 overflow-x-auto rounded-2xl border border-[#29436b] bg-[#080f1d] p-1.5 sm:gap-3"
        >
          <a
            href="#operations"
            className="whitespace-nowrap rounded-xl border border-cyan-200 bg-[#20a9eb] px-5 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(32,169,235,0.22)]"
          >
            Branches & Operations
          </a>
          <a
            href="#capacity"
            className="whitespace-nowrap rounded-xl px-5 py-3 text-sm font-semibold text-slate-400 transition hover:bg-[#14233b] hover:text-white"
          >
            Capacity
          </a>
          <a
            href="#hours"
            className="whitespace-nowrap rounded-xl px-5 py-3 text-sm font-semibold text-slate-400 transition hover:bg-[#14233b] hover:text-white"
          >
            Working Hours
          </a>
          <a
            href="#center-settings"
            className="whitespace-nowrap rounded-xl px-5 py-3 text-sm font-semibold text-slate-400 transition hover:bg-[#14233b] hover:text-white"
          >
            Center Settings
          </a>
        </nav>

        <section
          className="mb-8 grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 xl:grid-cols-4"
          aria-label="Operations summary"
        >
          <Summary
            label="Total Branches"
            value={branches.length}
            detail="Across your service network"
            icon="BR"
          />
          <Summary
            label="Active Locations"
            value={
              branches.filter((b) => b.active).length + " / " + branches.length
            }
            detail="Visible to customers"
            icon="ON"
          />
          <Summary
            label="Service Bays"
            value={branches.reduce((n, b) => n + Number(b.bays), 0)}
            detail="Across all branches"
            icon="BAY"
          />
          <Summary
            label="Daily Booking Limit"
            value={branches.reduce((n, b) => n + Number(b.limit), 0)}
            detail="Maximum appointments per day"
            icon="DAY"
          />
        </section>

        <div className="grid items-start gap-6 xl:grid-cols-[minmax(280px,340px)_minmax(0,1fr)]">
          <section
            id="operations"
            className="overflow-hidden rounded-2xl border border-[#29436b] bg-[#111f36] shadow-xl shadow-black/10"
          >
            <div className="border-b border-[#29436b] p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="font-bold">Your Branches</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Select a location to manage
                  </p>
                </div>
                <span className="rounded-lg bg-[#203653] px-2.5 py-1 text-xs font-semibold text-slate-300">
                  {branches.length}
                </span>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search branches..."
                className={inputClass}
              />
            </div>
            <div className="max-h-[320px] space-y-2 overflow-y-auto p-3 sm:max-h-[620px]">
              {filtered.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => {
                    setSelectedId(branch.id);
                    setSaved(false);
                  }}
                  className={
                    "w-full rounded-xl border p-3 text-left transition sm:p-4 " +
                    (branch.id === selected.id
                      ? "border-cyan-400/70 bg-[#172b49] shadow-[inset_3px_0_0_#22c7f4]"
                      : "border-transparent hover:border-[#29436b] hover:bg-[#14243d]")
                  }
                >
                  <div className="mb-2 flex justify-between">
                    <b className="text-sm">{branch.name}</b>
                    <span
                      className={
                        branch.active ? "text-emerald-400" : "text-slate-500"
                      }
                    >
                      â—
                    </span>
                  </div>
                  <p className="mb-3 text-xs text-slate-400">
                    {branch.address}
                  </p>
                  <p className="text-xs text-slate-400">
                    <strong className="text-slate-200">{branch.bays}</strong>{" "}
                    bays <span className="mx-1 text-slate-600">|</span>
                    <strong className="text-slate-200">
                      {branch.limit}
                    </strong>{" "}
                    bookings/day
                  </p>
                </button>
              ))}
              {!filtered.length && (
                <p className="p-5 text-center text-sm text-slate-400">
                  No branches match your search.
                </p>
              )}
            </div>
            <button
              onClick={() => setShowAdd(true)}
              className="m-3 w-[calc(100%-1.5rem)] rounded-xl border border-dashed border-[#37577f] py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              + Add Another Branch
            </button>
          </section>

          <div className="space-y-6">
            <section className="rounded-2xl border border-[#29436b] bg-[#111f36] shadow-xl shadow-black/10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#29436b] p-5 sm:p-6">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold">{selected.name}</h2>
                    <span className="rounded-md border border-[#37577f] bg-[#172b49] px-2 py-1 text-[10px] font-bold tracking-wide text-cyan-300">
                      BRANCH
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    {selected.address}
                  </p>
                </div>
                <label className="flex cursor-pointer items-center gap-2 text-xs font-semibold text-slate-200">
                  <input
                    type="checkbox"
                    checked={selected.active}
                    onChange={(e) => update("active", e.target.checked)}
                    className="h-4 w-4 accent-cyan-400"
                  />
                  {selected.active ? "Active" : "Inactive"}
                </label>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                <Field
                  label="Branch Name"
                  value={selected.name}
                  onChange={(e) => update("name", e.target.value)}
                />
                <Field
                  label="Branch Manager"
                  value={selected.manager}
                  onChange={(e) => update("manager", e.target.value)}
                />
                <Field
                  label="Branch Address"
                  value={selected.address}
                  onChange={(e) => update("address", e.target.value)}
                />
                <Field
                  label="Contact Number"
                  value={selected.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
            </section>

            <section
              id="capacity"
              className="rounded-2xl border border-[#29436b] bg-[#111f36] shadow-xl shadow-black/10"
            >
              <div className="border-b border-[#29436b] p-5 sm:p-6">
                <h2 className="font-bold">Operational Capacity</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Set booking limits for this branch
                </p>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                <Field
                  label="Service Bays"
                  type="number"
                  min="1"
                  value={selected.bays}
                  onChange={(e) =>
                    update("bays", Math.max(1, Number(e.target.value)))
                  }
                />
                <Field
                  label="Maximum Bookings per Day"
                  type="number"
                  min="1"
                  value={selected.limit}
                  onChange={(e) =>
                    update("limit", Math.max(1, Number(e.target.value)))
                  }
                />
              </div>
              <p className="mx-5 mb-5 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3.5 text-xs leading-5 text-amber-100 sm:mx-6 sm:mb-6">
                Booking limits help prevent overbooking. Keep the daily limit
                aligned with available bays and team size.
              </p>
            </section>

            <section
              id="hours"
              className="rounded-2xl border border-[#29436b] bg-[#111f36] shadow-xl shadow-black/10"
            >
              <div className="border-b border-[#29436b] p-5 sm:p-6">
                <h2 className="font-bold">Working Hours</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Choose when customers can book
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <p className="mb-3 text-sm font-medium text-slate-300">
                  Operating Days
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {weekdays.map((day) => (
                    <button
                      key={day}
                      type="button"
                      aria-pressed={selected.days.includes(day)}
                      onClick={() =>
                        update(
                          "days",
                          selected.days.includes(day)
                            ? selected.days.filter((d) => d !== day)
                            : [...selected.days, day],
                        )
                      }
                      className={
                        "rounded-lg border px-3 py-2 text-xs font-semibold transition " +
                        (selected.days.includes(day)
                          ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                          : "border-[#29436b] text-slate-400 hover:bg-[#172b49]")
                      }
                    >
                      {day}
                    </button>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Opening Time"
                    type="time"
                    value={selected.open}
                    onChange={(e) => update("open", e.target.value)}
                  />
                  <Field
                    label="Closing Time"
                    type="time"
                    value={selected.close}
                    onChange={(e) => update("close", e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section
              id="center-settings"
              className="rounded-2xl border border-[#29436b] bg-[#111f36] p-5 sm:p-6"
            >
              <h2 className="font-bold">Service Center Settings</h2>
              <p className="mt-1 text-sm text-slate-400">
                Branch visibility and booking availability are controlled by the
                active status and hours above.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <span
                  className={
                    selected.active ? "text-cyan-300" : "text-slate-500"
                  }
                >
                  â—
                </span>
                <span className="text-slate-300">
                  {selected.active
                    ? "This branch is available to customers."
                    : "This branch is hidden from customers."}
                </span>
              </div>
            </section>

            <div className="flex flex-col-reverse justify-between gap-3 pb-8 sm:flex-row sm:items-center">
              <p className="text-xs text-slate-500">
                Changes are stored in this browser.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:justify-end sm:gap-3">
                <button
                  onClick={() => {
                    setBranches(loadBranches());
                    setSaved(false);
                  }}
                  className="w-full rounded-xl px-3 py-3 text-xs font-semibold text-slate-300 hover:bg-[#14243d] sm:w-auto sm:px-4 sm:text-sm"
                >
                  Reset Changes
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem(
                      "autocare-operations-branches",
                      JSON.stringify(branches),
                    );
                    setSaved(true);
                  }}
                  className="w-full rounded-xl bg-[#20a9eb] px-3 py-3 text-xs font-bold text-white sm:w-auto sm:px-5 sm:text-sm transition hover:bg-cyan-500"
                >
                  {saved ? "Changes Saved" : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAdd && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/70 p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setShowAdd(false);
          }}
        >
          <form
            onSubmit={addBranch}
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-[#29436b] bg-[#111f36] p-5 shadow-2xl sm:p-6"
          >
            <div className="mb-5 flex justify-between">
              <div>
                <h2 className="text-lg font-bold">Add a Branch</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Create a location for your service center.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowAdd(false)}
                aria-label="Close"
                className="text-xl text-slate-400 hover:text-white"
              >
                x
              </button>
            </div>
            <Field
              label="Branch Name"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
            />
            <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:justify-end sm:gap-3">
              <button
                type="button"
                onClick={() => setShowAdd(false)}
                className="rounded-xl px-4 py-2.5 text-sm text-slate-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!branchName.trim()}
                className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
              >
                Create Branch
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}

function Summary({ label, value, detail, icon }) {
  return (
    <article className="rounded-2xl border border-[#29436b] bg-[#111f36] p-5 shadow-lg shadow-black/10">
      <div className="mb-4 flex items-start justify-between">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#22618a] bg-[#102d47] text-[10px] font-extrabold tracking-wide text-cyan-300">
          {icon}
        </span>
      </div>
      <div className="text-3xl font-bold tracking-tight text-white">
        {value}
      </div>
      <p className="mt-1 text-xs text-slate-400">{detail}</p>
    </article>
  );
}
