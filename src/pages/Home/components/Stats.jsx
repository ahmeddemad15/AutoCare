const stats = [
  { number: "+300", label: "مركز خدمة معتمد" },
  { number: "4.9", label: "متوسط تقييم الخدمة" },
  { number: "+25 ألف", label: "حجز وصيانة ناجحة" },
  { number: "200 ج.م", label: "تبدأ الأسعار من" },
];
export default function Stats() {
  return (
    <section
      dir="rtl"
      className="bg-gradient-to-l from-[#1D4ED8] to-[#38BDF8] text-white shadow-[0_10px_30px_rgba(29,78,216,0.25)]"
    >
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-around gap-5 px-5 py-7">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-[130px] text-center">
            <b className="block text-[34px] font-black leading-tight">
              {stat.number}
            </b>
            <span className="text-[13px] font-semibold opacity-90">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
