import { Flag } from "@gravity-ui/icons";
import AdminPanel from "./AdminPanel.jsx";

// Lists complaints. Prop: reports (array of { id, title, reportedBy, status }).
// Shows an empty state when there are none.
function IncidentReportsPanel({ reports }) {
  return (
    <AdminPanel title="Incident Reports" icon={<Flag width={18} height={18} />}>
      {reports.length === 0 ? (
        <p className="mt-2 text-sm text-slate-400">No complaints.</p>
      ) : (
        <ul className="grid gap-2.5">
          {reports.map((report) => (
            <li key={report.id} className="rounded-xl bg-[#14274a] px-4 py-3">
              <p className="text-sm font-bold">{report.title}</p>
              <p className="text-xs text-slate-400">
                Reported by {report.reportedBy} · {report.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </AdminPanel>
  );
}

export default IncidentReportsPanel;
