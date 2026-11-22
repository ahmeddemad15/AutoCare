import FormField from "../FormField";

const AddBranchModal = ({ branchName, onNameChange, onClose, onSubmit }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}
  >
    <form
      onSubmit={onSubmit}
      aria-labelledby="add-branch-title"
      className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 shadow-2xl sm:p-6"
    >
      <div className="mb-5 flex justify-between">
        <div>
          <h2 id="add-branch-title" className="text-lg font-bold">
            Add a Branch
          </h2>
          <p className="mt-1 text-sm text-(--cp-muted)">
            Create a location for your service center.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer text-xl text-(--cp-muted) hover:text-(--cp-text)"
        >
          x
        </button>
      </div>
      <FormField
        id="new-branch-name"
        label="Branch Name"
        value={branchName}
        onChange={(event) => onNameChange(event.target.value)}
        autoFocus
      />
      <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:justify-end sm:gap-3">
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer rounded-xl px-4 py-2.5 text-sm text-(--cp-muted)"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!branchName.trim()}
          className="cursor-pointer rounded-xl bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-4 py-2.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Create Branch
        </button>
      </div>
    </form>
  </div>
);

export default AddBranchModal;
