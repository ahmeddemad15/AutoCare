const CenterPlaceholder = ({ title }) => {
  return (
    <div className="rounded-2xl border border-(--cp-line) bg-(--cp-surface) p-8 text-center">
      <h2 className="text-xl font-extrabold">{title}</h2>
      <p className="mt-2 text-(--cp-muted)">This page is coming soon.</p>
    </div>
  );
};
export default CenterPlaceholder;
