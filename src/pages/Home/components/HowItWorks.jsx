import { Card } from "@heroui/react";

const steps = [
  {
    number: "01",
    title: "أضف سيارتك",
    description: "سجل بيانات سيارتك وعداد الكيلومترات.",
  },
  {
    number: "02",
    title: "اختر الخدمة",
    description: "اختر خدمة الصيانة المناسبة وابحث عن أفضل المراكز.",
  },
  {
    number: "03",
    title: "احجز وانطلق",
    description: "حدد الموعد المناسب وتابع حالة حجزك بسهولة.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      dir="rtl"
      className="bg-[#0F172A] text-white px-5 py-20"
    >

      <div className="max-w-[1180px] mx-auto">

        <h2 className="text-3xl md:text-4xl font-black mb-3">
          ثلاث خطوات وعربيتك جاهزة
        </h2>

        <p className="text-gray-400 mb-9">
          من التنبيه الذكي للزيت إلى الفاتورة الإلكترونية،
          كل شيء يتم من هاتفك.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          {steps.map((step) => (

            <Card
              key={step.number}
              className="bg-[#142037] border border-[#243C63] text-white"
            >

              <Card.Content className="p-6">

                <div className="h-40 bg-blue-900/30 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-5xl font-black text-cyan-400">
                    {step.number}
                  </span>
                </div>

                <span className="text-cyan-400 text-sm font-bold">
                  STEP {step.number}
                </span>

                <h3 className="text-xl font-bold mt-2 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>

              </Card.Content>

            </Card>

          ))}

        </div>
      </div>
    </section>
  );
}