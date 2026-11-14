import { Button } from "@heroui/react";
import { MapPin, Smartphone } from "@gravity-ui/icons";

// One affiliation request row.
// Props: request {id, centerName, contactName, phone}, busy (bool),
// onApprove(id), onDecline(id). No state: the page decides what happens.
// HeroUI Buttons use onPress (works for mouse, touch and keyboard).
function CenterRequestItem({ request, busy, onApprove, onDecline }) {
  const { id, centerName, contactName, phone } = request;
  return (
    <li className="flex flex-col gap-3 rounded-xl bg-[#14274a] px-4 py-3 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between">
      <div className="min-w-0">
        <p className="mb-1 break-words text-sm font-bold" dir="auto">
          {centerName}
        </p>
        <p
          className="flex flex-wrap items-center gap-x-3 text-xs text-slate-400"
          dir="auto"
        >
          {contactName && (
            <span className="inline-flex items-center gap-1">
              <MapPin width={12} height={12} />
              {contactName}
            </span>
          )}
          {phone && (
            <span className="inline-flex items-center gap-1">
              <Smartphone width={12} height={12} />
              {phone}
            </span>
          )}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Button
          size="sm"
          variant="primary"
          isDisabled={busy}
          onPress={() => onApprove(id)}
        >
          Approve
        </Button>
        <Button
          size="sm"
          variant="danger-soft"
          isDisabled={busy}
          onPress={() => onDecline(id)}
        >
          Decline
        </Button>
      </div>
    </li>
  );
}

export default CenterRequestItem;
