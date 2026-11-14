import { CircleCheck, Flag, Persons, Wrench } from "@gravity-ui/icons";
import AdminStatCard from "./AdminStatCard";

// Maps the stats object to four cards. Prop: stats {registeredUsers,
// activeCenters, fulfilledBookings, openInquiries}.
const CARD_CONFIG = [
  { key: "registeredUsers", label: "Registered Users", Icon: Persons },
  { key: "activeCenters", label: "Active Centers", Icon: Wrench },
  { key: "fulfilledBookings", label: "Fulfilled Bookings", Icon: CircleCheck },
  { key: "openInquiries", label: "Open Inquiries", Icon: Flag },
];

function AdminStatsGrid({ stats }) {
  return (
    <section
      aria-label="Platform statistics"
      className="grid gap-4 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4"
    >
      {CARD_CONFIG.map(({ key, label, Icon }) => (
        <AdminStatCard
          key={key}
          icon={<Icon width={20} height={20} />}
          label={label}
          value={stats[key]}
        />
      ))}
    </section>
  );
}

export default AdminStatsGrid;
