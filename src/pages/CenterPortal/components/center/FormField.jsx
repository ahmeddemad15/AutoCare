const FormField = ({ id, label, error, hint, as = "input", ...inputProps }) => {
  const Control = as;

  // Which message describes this field for screen readers
  let describedBy;
  if (error) describedBy = `${id}-error`;
  else if (hint) describedBy = `${id}-hint`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">
        {label}
      </label>
      <Control
        id={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={describedBy}
        className={`w-full rounded-lg border bg-(--cp-bg) px-3 py-2.5 text-sm text-(--cp-text) outline-none transition focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500/25"
            : "border-(--cp-line) focus:border-(--cp-accent) focus:ring-(--cp-accent)/25"
        }`}
        {...inputProps}
      />

      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs font-bold text-red-400">
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-(--cp-muted)">
          {hint}
        </p>
      )}
    </div>
  );
};

export default FormField;
