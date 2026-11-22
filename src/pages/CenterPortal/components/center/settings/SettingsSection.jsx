const SettingsSection = ({ id, title, description, children }) => (
  <section id={id} className="scroll-mt-24 rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-5 sm:p-7">
    <div className="mb-5 border-b border-(--cp-line) pb-4">
      <h3 className="text-lg font-extrabold sm:text-xl">{title}</h3>
      {description && <p className="mt-1 text-sm text-(--cp-muted)">{description}</p>}
    </div>
    <div className="space-y-5">{children}</div>
  </section>
);
export default SettingsSection;
