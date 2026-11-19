const services = [
  {
    icon: "🔧",
    title: "صيانة السيارات",
    description: "صيانة دورية وإصلاح جميع الأعطال.",
  },
  {
    icon: "🛢️",
    title: "تغيير الزيت",
    description: "تغيير زيت المحرك والفلاتر.",
  },
  {
    icon: "🚿",
    title: "غسيل السيارات",
    description: "غسيل داخلي وخارجي بأفضل جودة.",
  },
  {
    icon: "✨",
    title: "النانو سيراميك",
    description: "حماية طلاء السيارة ولمعان يدوم.",
  },
  {
    icon: "🛞",
    title: "الإطارات والفرامل",
    description: "فحص وصيانة الإطارات وأنظمة الفرامل.",
  },
  {
    icon: "🔋",
    title: "البطاريات",
    description: "فحص وتغيير بطاريات السيارات.",
  },
];
export default function Services() {
  return (
    <section id="services" dir="rtl" className="scroll-mt-20 bg-[#142037] px-5 py-20 text-[#F0F9FF]">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="mb-2 text-3xl font-black md:text-[44px]">
          كل ما تحتاجه سيارتك
        </h2>
        <p className="mb-9 max-w-[540px] text-[15px] text-[#94A3B8]">
          اختر الخدمة وسنوصلك لأقوى مركز متخصص في منطقتك
          بأسعار واضحة ومسبقة.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative col-span-2 aspect-[4/3] cursor-pointer overflow-hidden rounded-[18px] border border-[#243C63] bg-gradient-to-br from-[#1E2F4D] to-[#0F172A] transition duration-500 hover:border-[#38BDF8] ${
                index < 2 ? "md:col-span-3 md:aspect-[16/9]" : ""
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:scale-110">
                <span className="text-7xl opacity-80">
                  {service.icon}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-transparent px-5 pb-5 pt-12 text-white">
                <b className="block text-lg font-extrabold">
                  {service.title}
                </b>
                <span className="text-[13px] text-[#BAE6FD]">
                  {service.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
