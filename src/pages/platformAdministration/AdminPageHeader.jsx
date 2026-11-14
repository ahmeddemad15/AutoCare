import { Shield } from "@gravity-ui/icons";

// Presentational: shield icon, title, subtitle. Props: title, subtitle.
function AdminPageHeader({ title, subtitle }) {
  return (
    <header className="border-b border-[#223457] pb-4">
      <h1 className="mb-3 flex items-center gap-3 text-3xl font-bold text-slate-100 sm:text-4xl">
        <Shield
          width={36}
          height={36}
          className="text-sky-400"
          aria-hidden="true"
        />
        {title}
      </h1>
      <p className="text-sm text-slate-400">{subtitle}</p>
    </header>
  );
}

export default AdminPageHeader;
