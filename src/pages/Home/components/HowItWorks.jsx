const steps = [
  {
    number: "01",
    icon: "🚘",
    title: "أضف سيارتك",
    description: "سجل بيانات سيارتك وعداد الكيلومترات.",
  },
  {
    number: "02",
    icon: "🔧",
    title: "اختر الخدمة",
    description: "اختر خدمة الصيانة المناسبة وابحث عن أفضل المراكز.",
  },
  {
    number: "03",
    icon: "📅",
    title: "احجز وانطلق",
    description: "حدد الموعد المناسب وتابع حالة حجزك بسهولة.",
  },
];
export default function HowItWorks() {
  return (
    <section id="how" dir="rtl" className="scroll-mt-20 bg-[#0F172A] px-5 py-20 text-[#F0F9FF]">
      <div className="mx-auto max-w-[1180px]">

        <h2 className="mb-2 text-3xl font-black md:text-[44px]">
          ثلاث خطوات وعربيتك جاهزة
        </h2>
        <p className="mb-9 max-w-[540px] text-[15px] text-[#94A3B8]">
          من التنبيه الذكي للزيت إلى الفاتورة الإلكترونية،
          كل شيء يتم من هاتفك.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="overflow-hidden rounded-[18px] border border-[#243C63] bg-[#142037] transition duration-300 hover:-translate-y-1 hover:border-[#38BDF8] hover:shadow-[0_10px_30px_rgba(56,189,248,0.12)]"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#1D4ED8]/30 to-[#38BDF8]/10">
                <span className="text-7xl">{step.icon}</span>
              </div>
              <div className="p-[22px]">
                <span className="text-sm font-bold text-[#22D3EE]">
                  STEP {step.number}
                </span>
                <h3 className="mb-2 mt-2 text-xl font-extrabold">
                  {step.title}
                </h3>
                <p className="text-sm text-[#94A3B8]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
