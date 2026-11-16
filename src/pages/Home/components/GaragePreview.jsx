const features = [
  {
    icon: "⏱",
    title: "تنبيهات صيانة ذكية:",
    description: "بناءً على عداد الكيلومترات الفعلي ومعدل استهلاك الزيت.",
  },
  {
    icon: "📅",
    title: "متابعة الحجوزات فورياً:",
    description: "مؤكد، قيد التأكيد أو مكتمل، مع إشعار بأسباب الاعتذار إن وجدت.",
  },
  {
    icon: "📈",
    title: "تقرير المصروفات الشامل:",
    description: "وقود، صيانة، إكسسوارات وغسيل في سجل دائم بدون أي حذف.",
  },
];
export default function GaragePreview({ onOpenApp }) {
  return (
    <section dir="rtl" className="bg-[#142037] px-5 py-20 text-[#F0F9FF]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <h2 className="mb-3 text-3xl font-black md:text-[44px]">
            كراج سياراتك في تطبيق واحد
          </h2>
          <p className="mb-8 max-w-[540px] leading-8 text-[#94A3B8]">
            أضف سياراتك وسيقوم النظام الذكي باحتساب الكيلومترات
            وتذكيرك بالزيت والفرامل قبل أي عطل مفاجئ.
          </p>
          <div className="grid gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#243C63] bg-[#38BDF8]/10 text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-1 font-extrabold text-[#38BDF8]">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#94A3B8]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={onOpenApp}
            className="mt-8 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#1D4ED8] px-7 py-3 font-extrabold text-white shadow-lg transition hover:-translate-y-1 hover:brightness-110"
          >
            جرب كراج المالك الآن
          </button>
        </div>
        <div className="rounded-[35px] border-[8px] border-[#080D1A] bg-[#142037] p-5 shadow-[0_35px_80px_rgba(56,189,248,0.2)]">
          <div className="mb-5 flex items-center justify-between text-sm font-bold text-[#94A3B8]">
            <span>كراج المالك الذكي</span>
            <span dir="ltr" className="text-lg font-black text-white">
              AUTO<span className="text-[#38BDF8]">CARE</span>
            </span>
          </div>
          <div className="mb-4 rounded-xl border border-[#38BDF8] bg-[#38BDF8]/10 p-3 text-xs font-bold text-[#BAE6FD]">
            ⚠️ حان موعد تغيير زيت بي إم دبليو قريبًا!
          </div>
          <div className="mb-3 rounded-[14px] border border-[#243C63] bg-[#1E2F4D] p-3">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#142037] text-3xl">
                🚙
              </div>
              <div>
                <h3 className="font-extrabold">BMW 320i</h3>
                <p className="text-xs text-[#94A3B8]">موديل 2022</p>
              </div>
            </div>
            <div className="rounded-xl border border-[#243C63] bg-[#142037] p-3">
              <p className="text-xs text-[#94A3B8]">
                عداد الكيلومترات
              </p>
              <b className="text-xl font-extrabold text-[#22D3EE]">
                45,000 KM
              </b>
            </div>
          </div>
          <div className="mb-4 rounded-xl border border-[#243C63] bg-[#1E2F4D] p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold">الصيانة القادمة</span>
              <span className="font-bold text-[#38BDF8]">80%</span>
            </div>
            <div className="mt-3 h-[7px] overflow-hidden rounded-full bg-[#243C63]">
              <div className="h-full w-4/5 rounded-full bg-gradient-to-l from-[#38BDF8] to-[#1D4ED8]" />
            </div>
          </div>
          <div className="text-center text-xs text-[#64748B]">
            Your car is in good hands
          </div>

        </div>
      </div>
    </section>
  );
}
