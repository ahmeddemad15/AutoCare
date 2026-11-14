import { useEffect, useState } from "react";
import AdminPageHeader from "./AdminPageHeader";
import AdminStatsGrid from "./AdminStatsGrid";
import MaintenanceVolumeChart from "./MaintenanceVolumeChart";
import IncidentReportsPanel from "./IncidentReportsPanel";
import CenterAffiliationRequests from "./CenterAffiliationRequests";
import {
  IS_MOCK_DATA,
  approveCenterRequest,
  declineCenterRequest,
  fetchAdminDashboard,
} from "./adminService";
import { Button, Spinner } from "@heroui/react";
import "../../index.css"; // Tailwind + HeroUI styles (main.jsx does not import them yet)

// Page container: owns all state and talks to the data layer.
// Children only receive props. Route protection (BR-01 / BR-09) belongs to the
// router and the backend, not to this page.
function PlatformAdministration() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState(null);
  const [notice, setNotice] = useState("");
  const [reloadKey, setReloadKey] = useState(0); // changing it re-runs the load effect

  useEffect(() => {
    let ignore = false; // avoids setting state after unmount
    fetchAdminDashboard()
      .then((data) => {
        if (ignore) return;
        setDashboard(data);
        setLoading(false);
      })
      .catch(() => {
        if (ignore) return;
        setError("Could not load platform data. Please try again."); // BR-10: no technical details
        setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [reloadKey]);

  const handleRetry = () => {
    setLoading(true);
    setError("");
    setReloadKey((key) => key + 1);
  };

  const handleDecision = async (requestId, decide, verb) => {
    setBusyId(requestId);
    setNotice("");
    try {
      await decide(requestId);
      setDashboard((current) => ({
        ...current,
        affiliationRequests: current.affiliationRequests.filter(
          (r) => r.id !== requestId,
        ),
      }));
      setNotice(
        IS_MOCK_DATA
          ? `Request ${verb} (demo only - nothing was saved).`
          : `Request ${verb}.`,
      );
    } catch {
      setNotice("Could not update the request. Please try again.");
    } finally {
      setBusyId(null);
    }
  };

  const handleApprove = (id) =>
    handleDecision(id, approveCenterRequest, "approved");
  const handleDecline = (id) =>
    handleDecision(id, declineCenterRequest, "declined");

  return (
    <main
      className="dark min-h-screen bg-[#0b1426] px-4 pb-14 pt-10 text-slate-100"
      data-theme="dark"
    >
      <div className="mx-auto grid max-w-[1080px] gap-5">
        <AdminPageHeader
          title="Platform Administration"
          subtitle="Network volume, dispute resolution, and workshop onboarding oversight."
        />

        {loading && (
          <p
            className="flex items-center gap-2 text-sm text-slate-400"
            role="status"
          >
            <Spinner size="sm" /> Loading…
          </p>
        )}
        {error && (
          <div
            className="flex flex-wrap items-center gap-3 text-sm text-red-400"
            role="alert"
          >
            {error}
            <Button size="sm" variant="primary" onPress={handleRetry}>
              Retry
            </Button>
          </div>
        )}

        {dashboard && (
          <>
            {IS_MOCK_DATA && (
              <p className="rounded-lg border border-dashed border-[#223457] px-3 py-2 text-xs text-slate-400">
                Demo data: not connected to the backend yet.
              </p>
            )}
            {notice && (
              <p className="text-sm text-slate-400" role="status">
                {notice}
              </p>
            )}
            <AdminStatsGrid stats={dashboard.stats} />
            <MaintenanceVolumeChart data={dashboard.monthlyVolume} />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <IncidentReportsPanel reports={dashboard.incidentReports} />
              <CenterAffiliationRequests
                requests={dashboard.affiliationRequests}
                busyId={busyId}
                onApprove={handleApprove}
                onDecline={handleDecline}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default PlatformAdministration;
