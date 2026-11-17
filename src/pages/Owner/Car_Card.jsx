import React from "react";

/* ---------- decorations drawn in each card's hero ---------- */
const DECO = {
  drop: (
    <path
      d="M36 4 C52 22 62 36 62 48 A26 26 0 0 1 10 48 C10 36 20 22 36 4 Z"
      fill="#e8f4fd"
    />
  ),
  sparkle: (
    <path
      d="M36 2 C39 24 48 33 70 36 C48 39 39 48 36 70 C33 48 24 39 2 36 C24 33 33 24 36 2 Z"
      fill="#22d3ee"
    />
  ),
  snowflake: (
    <g stroke="#c7d7f0" strokeWidth="6" strokeLinecap="round">
      <line x1="36" y1="4" x2="36" y2="68" />
      <line x1="8" y1="20" x2="64" y2="52" />
      <line x1="8" y1="52" x2="64" y2="20" />
    </g>
  ),
};

const Car_Card = ({ item, onBook }) => {
  const {
    name,
    area,
    rating,
    reviewsCount,
    services,
    startingPrice,
    currency,
    icon,
  } = item;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-[#243c63] bg-[#142037] transition duration-200 hover:-translate-y-1 hover:border-[#38BDF8] hover:shadow-[0_12px_34px_rgba(56,189,248,0.18)]">
      {/* hero */}
      <div
        className={`cb-hero cb-hero--${icon} relative flex h-[255px] items-end justify-center`}
      >
        <svg
          className="absolute inset-e-5.5 top-[18px] h-[72px] w-[72px]"
          viewBox="0 0 72 72"
        >
          {DECO[icon]}
        </svg>

        {icon === "sparkle" && (
          <svg
            className="absolute start-[70px] top-[34px] h-9 w-9"
            viewBox="0 0 72 72"
          >
            <path
              d="M36 2 C39 24 48 33 70 36 C48 39 39 48 36 70 C33 48 24 39 2 36 C24 33 33 24 36 2 Z"
              fill="#3b9fd8"
            />
          </svg>
        )}

        <svg className="mb-[22px] h-auto w-[86%]" viewBox="0 0 420 170">
          <path
            d="M8 138 C14 112 60 98 100 90 L148 64 C172 52 236 50 256 60 L304 82 C344 92 380 108 390 138 L390 142 L8 142 Z"
            fill="#f1f7ff"
          />
          <path
            d="M100 88 L150 68 C172 62 222 62 238 66 L282 86 Z"
            fill="#9aa0ad"
          />
          <circle
            cx="82"
            cy="142"
            r="30"
            fill="#0b1020"
            stroke="#475569"
            strokeWidth="9"
          />
          <circle
            cx="316"
            cy="142"
            r="30"
            fill="#0b1020"
            stroke="#475569"
            strokeWidth="9"
          />
        </svg>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 px-6.5 pb-[26px] pt-9">
        <h3 className=" text-[21px] font-bold leading-[1.3]">{name}</h3>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-num font-bold text-[#38BDF8]">★ {rating}</span>
          <span className="font-num italic text-[#94A3B8]">
            ({reviewsCount} reviews)
          </span>
          <span className="text-[#94A3B8]">•</span>
          <span className="cb-area font-bold italic text-[#38BDF8]">
            {area}
          </span>
        </div>

        <div className="mt-1 flex flex-wrap gap-2.5">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-lg bg-[#1e2f4d] px-3.5 py-1.5 text-[13px] font-semibold text-[#22D3EE]"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#243c63] pt-4.5">
          <span className="font-num text-lg font-semibold">
            From{" "}
            <span className="font-bold text-[#38BDF8]">
              {startingPrice} {currency}
            </span>
          </span>

          <button
            type="button"
            onClick={() => onBook(item)}
            className="font-num cursor-pointer rounded-[10px] bg-linear-to-br from-[#38BDF8] to-[#1D4ED8] px-5.5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-700/30 transition hover:-translate-y-px hover:brightness-110 active:translate-y-0"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default Car_Card;
