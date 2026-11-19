const centers = [
  {
    name: "AutoFix Center",
    type: "صيانة ميكانيكية",
    rating: "4.9",
    price: "يبدأ من 300 ج.م",
    icon: "🔧",
  },
  {
    name: "Premium Car Care",
    type: "غسيل وتلميع",
    rating: "4.8",
    price: "يبدأ من 200 ج.م",
    icon: "🚘",
  },
  {
    name: "Speed Service",
    type: "صيانة وإطارات",
    rating: "4.7",
    price: "يبدأ من 250 ج.م",
    icon: "🛞",
  },
];
export default function TopCenters() {
  return (
    <section id="centers-sec" dir="rtl" className="scroll-mt-20 bg-[#0F172A] px-5 py-20 text-[#F0F9FF]">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="mb-2 text-3xl font-black md:text-[44px]">
          أعلى مراكز الصيانة تقييمًا
        </h2>
        <p className="mb-9 max-w-[540px] text-[15px] text-[#94A3B8]">
          مراكز موثقة ومجربة من أصحاب السيارات بأسعار دقيقة ومواعيد مؤكدة.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {centers.map((center) => (
            <div
              key={center.name}
              className="overflow-hidden rounded-[18px] border border-[#243C63] bg-[#142037] transition hover:-translate-y-1 hover:border-[#38BDF8] hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)]"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#1D4ED8]/30 to-[#38BDF8]/10">
                <span className="text-7xl">{center.icon}</span>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-3 py-1 text-xs font-bold text-[#38BDF8]">
                    {center.type}
                  </span>
                  <span className="font-bold text-yellow-400">
                    ⭐ {center.rating}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-extrabold">
                  {center.name}
                </h3>
                <p className="mb-5 text-sm text-[#94A3B8]">
                  {center.price}
                </p>
                <button className="w-full rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] py-3 font-extrabold text-white transition hover:brightness-110">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
