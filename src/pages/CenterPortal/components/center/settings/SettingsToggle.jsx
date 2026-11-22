const SettingsToggle = ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between gap-4">
    <div>
      <p className="text-sm font-bold">{label}</p>
      {description && <p className="mt-1 text-xs text-(--cp-muted)">{description}</p>}
    </div>
    <button type="button" role="switch" aria-checked={checked} aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 cursor-pointer rounded-full transition ${checked ? "bg-(--cp-accent)" : "bg-(--cp-surface-2)"}`}>
      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${checked ? "start-6" : "start-1"}`} />
    </button>
  </div>
);
export default SettingsToggle;
