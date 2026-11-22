import { useState } from "react";

import AddBranchModal from "./components/center/services/AddBranchModal";
import BranchEditor from "./components/center/services/BranchEditor";
import BranchList from "./components/center/services/BranchList";
import OperationsSummary from "./components/center/services/OperationsSummary";
import {
  BRANCHES_STORAGE_KEY,
  INITIAL_BRANCHES,
  readBranches,
} from "./operationsData";

const createBranch = (name) => ({
  id: Date.now(),
  name,
  address: "Add branch address",
  manager: "Branch manager",
  phone: "+20",
  bays: 4,
  limit: 12,
  open: "09:00",
  close: "21:00",
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  active: true,
});

const ServicesPage = () => {
  const [initialData] = useState(readBranches);
  const [branches, setBranches] = useState(initialData.branches);
  const [selectedId, setSelectedId] = useState(
    initialData.branches[0]?.id ?? null,
  );
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [branchName, setBranchName] = useState("");
  const [saved, setSaved] = useState(false);
  const [storageError, setStorageError] = useState(initialData.error);

  const selected =
    branches.find((branch) => branch.id === selectedId) ?? branches[0] ?? null;

  const updateBranch = (key, value) => {
    if (!selected) return;
    setBranches((current) =>
      current.map((branch) =>
        branch.id === selected.id ? { ...branch, [key]: value } : branch,
      ),
    );
    setSaved(false);
  };

  const handleAddBranch = (event) => {
    event.preventDefault();
    const name = branchName.trim();
    if (!name) return;

    const branch = createBranch(name);
    setBranches((current) => [...current, branch]);
    setSelectedId(branch.id);
    setBranchName("");
    setShowAdd(false);
    setSaved(false);
  };

  const resetChanges = () => {
    const restored = readBranches();
    const nextBranches =
      restored.branches.length > 0 ? restored.branches : INITIAL_BRANCHES;
    setBranches(nextBranches);
    setSelectedId(nextBranches[0]?.id ?? null);
    setStorageError(restored.error);
    setSaved(false);
  };

  const saveChanges = () => {
    try {
      localStorage.setItem(BRANCHES_STORAGE_KEY, JSON.stringify(branches));
      setStorageError("");
      setSaved(true);
    } catch {
      setStorageError(
        "Could not save changes in this browser. Check storage availability and try again.",
      );
      setSaved(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <header className="mb-1">
        <p className="mb-2 text-sm font-bold text-(--cp-accent)">
          Service Center / Services
        </p>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Service Center Operations
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-(--cp-muted)">
              Manage branches, capacity, and working hours across your service
              network.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAdd(true)}
            className="cursor-pointer self-start rounded-xl bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110 sm:self-auto"
          >
            + Add Branch
          </button>
        </div>
      </header>

      <nav
        aria-label="Service center sections"
        className="flex gap-2 overflow-x-auto rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-1.5 sm:gap-3"
      >
        {[
          ["operations", "Branches & Operations"],
          ["capacity", "Capacity"],
          ["hours", "Working Hours"],
          ["center-settings", "Center Settings"],
        ].map(([target, label], index) => (
          <a
            key={target}
            href={`#${target}`}
            className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-bold transition sm:px-5 ${
              index === 0
                ? "bg-(--cp-accent) text-white"
                : "text-(--cp-muted) hover:bg-(--cp-surface-2) hover:text-(--cp-text)"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {storageError && (
        <p
          role="alert"
          className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm font-bold text-amber-300"
        >
          {storageError}
        </p>
      )}

      <OperationsSummary branches={branches} />

      {selected ? (
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(280px,340px)_minmax(0,1fr)]">
          <BranchList
            branches={branches}
            selectedId={selected.id}
            search={search}
            onSearchChange={setSearch}
            onSelect={(id) => {
              setSelectedId(id);
              setSaved(false);
            }}
            onAdd={() => setShowAdd(true)}
          />
          <div className="space-y-6">
            <BranchEditor branch={selected} onChange={updateBranch} />
            <div className="flex flex-col-reverse justify-between gap-3 pb-8 sm:flex-row sm:items-center">
              <p className="text-xs text-(--cp-muted)">
                Changes are stored in this browser.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:justify-end sm:gap-3">
                <button
                  type="button"
                  onClick={resetChanges}
                  className="cursor-pointer rounded-xl px-3 py-3 text-xs font-bold text-(--cp-muted) hover:bg-(--cp-surface-2) sm:w-auto sm:px-4 sm:text-sm"
                >
                  Reset Changes
                </button>
                <button
                  type="button"
                  onClick={saveChanges}
                  className="cursor-pointer rounded-xl bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-3 py-3 text-xs font-bold text-white transition hover:brightness-110 sm:px-5 sm:text-sm"
                >
                  {saved ? "Changes Saved" : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-10 text-center text-(--cp-muted)">
          No branches are available.
        </p>
      )}

      {showAdd && (
        <AddBranchModal
          branchName={branchName}
          onNameChange={setBranchName}
          onClose={() => setShowAdd(false)}
          onSubmit={handleAddBranch}
        />
      )}
    </div>
  );
};

export default ServicesPage;
