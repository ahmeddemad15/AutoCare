import { Card, Button } from "@heroui/react";

const features = [
  {
    title: "تنبيهات صيانة ذكية",
    description: "بناءً على عداد الكيلومترات ومواعيد تغيير الزيت.",
  },
  {
    title: "متابعة الحجوزات",
    description: "تابع حالة حجوزاتك بسهولة.",
  },
  {
    title: "تقرير المصروفات",
    description: "تابع مصاريف سيارتك باستمرار.",
  },
];

export default function GaragePreview({ onOpenApp }) {
  return (
    <section
      id="app"
      dir="rtl"
      className="bg-[#142037] px-5 py-20 text-white"
    >
      <div className="max-w-[1180px] mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            كراج سياراتك في تطبيق واحد
          </h2>

          <p className="text-gray-400 mb-8 leading-8">
            أضف سياراتك وسيقوم النظام بتذكيرك بمواعيد الصيانة
            قبل حدوث أي عطل مفاجئ.
          </p>

          <div className="grid gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">

                <div className="bg-[#0F172A] w-14 h-14 rounded-xl shrink-0 border border-cyan-400/30"></div>

                <div>
                  <h3 className="font-bold text-cyan-400">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {feature.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

          <Button
            onPress={onOpenApp}
            className="bg-blue-600 text-white mt-8"
          >
            جرب كراج المالك الآن
          </Button>
        </div>

        <Card className="bg-[#0F172A] border border-[#243C63] text-white">

          <Card.Content className="p-6">

            <h3 className="text-xl font-bold mb-5">
              كراج المالك الذكي
            </h3>

            <div className="bg-cyan-400/10 border border-cyan-400 rounded-xl p-4 mb-4 text-cyan-300">
              ⚠️ حان موعد تغيير الزيت قريبًا!
            </div>

            <div className="bg-[#1E2F4D] rounded-xl p-4 mb-4">

              <div className="w-16 h-16 rounded-xl bg-cyan-400/10 border border-cyan-400/30 mb-3"></div>

              <h3 className="font-bold text-xl">
                BMW 320i
              </h3>

              <p className="text-gray-400 text-sm">
                موديل 2022
              </p>

              <p className="text-cyan-400 font-bold mt-4">
                45,000 KM
              </p>

            </div>

            <div className="bg-[#1E2F4D] p-4 rounded-xl">

              <div className="flex justify-between">
                <span>الصيانة القادمة</span>
                <span className="text-cyan-400">80%</span>
              </div>

              <div className="w-full bg-gray-700 h-2 rounded-full mt-4">
                <div className="w-4/5 bg-cyan-400 h-2 rounded-full"></div>
              </div>

            </div>

          </Card.Content>
        </Card>

      </div>
    </section>
  );
}