const BranchList = ({
  branches,
  selectedId,
  search,
  onSearchChange,
  onSelect,
  onAdd,
}) => {
  const query = search.trim().toLowerCase();
  const filteredBranches = branches.filter((branch) =>
    `${branch.name} ${branch.address}`.toLowerCase().includes(query),
  );

  return (
    <section
      id="operations"
      className="overflow-hidden rounded-2xl border border-(--cp-line) bg-(--cp-surface) shadow-xl shadow-black/10"
    >
      <div className="border-b border-(--cp-line) p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-bold">Your Branches</h2>
            <p className="mt-1 text-xs text-(--cp-muted)">
              Select a location to manage
            </p>
          </div>
          <span className="rounded-lg bg-(--cp-surface-2) px-2.5 py-1 text-xs font-bold text-(--cp-muted)">
            {branches.length}
          </span>
        </div>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search branches..."
          aria-label="Search branches"
          className="w-full rounded-xl border border-(--cp-line) bg-(--cp-bg) px-3.5 py-3 text-sm text-(--cp-text) outline-none transition placeholder:text-(--cp-muted) focus:border-(--cp-accent) focus:ring-2 focus:ring-(--cp-accent)/25"
        />
      </div>

      <div className="max-h-[320px] space-y-2 overflow-y-auto p-3 sm:max-h-[620px]">
        {filteredBranches.map((branch) => (
          <button
            key={branch.id}
            type="button"
            onClick={() => onSelect(branch.id)}
            aria-pressed={branch.id === selectedId}
            className={`w-full rounded-xl border p-3 text-start transition sm:p-4 ${
              branch.id === selectedId
                ? "border-(--cp-accent) bg-(--cp-surface-2)"
                : "border-transparent hover:border-(--cp-line) hover:bg-(--cp-surface-2)"
            }`}
          >
            <div className="mb-2 flex justify-between">
              <span className="text-sm font-bold">{branch.name}</span>
              <span
                aria-label={branch.active ? "Active" : "Inactive"}
                className={branch.active ? "text-emerald-400" : "text-(--cp-muted)"}
              >
                ●
              </span>
            </div>
            <p className="mb-3 text-xs text-(--cp-muted)">{branch.address}</p>
            <p className="text-xs text-(--cp-muted)">
              <strong className="text-(--cp-text)">{branch.bays}</strong> bays
              <span className="mx-1">|</span>
              <strong className="text-(--cp-text)">{branch.limit}</strong>{" "}
              bookings/day
            </p>
          </button>
        ))}
        {filteredBranches.length === 0 && (
          <p className="p-5 text-center text-sm text-(--cp-muted)">
            No branches match your search.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="m-3 w-[calc(100%-1.5rem)] cursor-pointer rounded-xl border border-dashed border-(--cp-line) py-3 text-sm font-bold text-(--cp-muted) transition hover:border-(--cp-accent) hover:text-(--cp-accent)"
      >
        + Add Another Branch
      </button>
    </section>
  );
};

export default BranchList;
