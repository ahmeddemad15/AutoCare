import { Card } from "@heroui/react";

const services = [
  {
    title: "صيانة السيارات",
    description: "صيانة دورية وإصلاح جميع الأعطال.",
  },
  {
    title: "تغيير الزيت",
    description: "تغيير زيت المحرك والفلاتر.",
  },
  {
    title: "غسيل السيارات",
    description: "غسيل داخلي وخارجي بأفضل جودة.",
  },
  {
    title: "النانو سيراميك",
    description: "حماية طلاء السيارة ولمعان يدوم.",
  },
  {
    title: "الإطارات والفرامل",
    description: "فحص وصيانة الإطارات وأنظمة الفرامل.",
  },
  {
    title: "البطاريات",
    description: "فحص وتغيير بطاريات السيارات.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      dir="rtl"
      className="bg-[#142037] text-white px-5 py-20"
    >

      <div className="max-w-[1180px] mx-auto">

        <h2 className="text-3xl md:text-4xl font-black mb-3">
          كل ما تحتاجه سيارتك
        </h2>

        <p className="text-gray-400 mb-9">
          اختر الخدمة وسنوصلك لأقوى مركز متخصص في منطقتك
          بأسعار واضحة ومسبقة.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {services.map((service) => (

            <Card
              key={service.title}
              className="bg-[#1E2F4D] border border-[#243C63] text-white hover:border-sky-400 transition"
            >

              <Card.Content className="p-5">

                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 mb-5"></div>

                <h3 className="text-lg font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-sky-200">
                  {service.description}
                </p>

              </Card.Content>

            </Card>

          ))}

        </div>
      </div>
    </section>
  );
}