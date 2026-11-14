import { FileText } from "@gravity-ui/icons";
import AdminPanel from "./AdminPanel.jsx";
import CenterRequestItem from "./CenterRequestItem";

// Panel wrapper. Props: requests, busyId (id being processed or null),
// onApprove, onDecline.
function CenterAffiliationRequests({ requests, busyId, onApprove, onDecline }) {
  return (
    <AdminPanel
      title="Center Affiliation Requests"
      icon={<FileText width={18} height={18} />}
    >
      {requests.length === 0 ? (
        <p className="mt-2 text-sm text-slate-400">No pending requests.</p>
      ) : (
        <ul className="grid gap-2.5">
          {requests.map((request) => (
            <CenterRequestItem
              key={request.id}
              request={request}
              busy={busyId === request.id}
              onApprove={onApprove}
              onDecline={onDecline}
            />
          ))}
        </ul>
      )}
    </AdminPanel>
  );
}

export default CenterAffiliationRequests;
