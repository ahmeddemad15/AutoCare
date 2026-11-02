
import { Card } from "@heroui/react";

const stats = [
  {
    number: "+300",
    label: "مركز خدمة معتمد"
  },
  {
    number: "4.9",
    label: "متوسط تقييم الخدمة"
  },
  {
    number: "+25 ألف",
    label: "حجز وصيانة ناجحة"
  },
  {
    number: "200 ج.م",
    label: "تبدأ الأسعار من"
  },
];

export default function Stats() {

  return (
    <section
      dir="rtl"
      className="bg-gradient-to-l from-blue-700 to-sky-400 text-white px-5 py-8"
    >

      <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

        {stats.map((stat) => (

          <Card
            key={stat.label}
            className="bg-transparent border-none shadow-none text-white"
          >

            <Card.Content className="text-center p-3">

              <h2 className="text-3xl font-black">
                {stat.number}
              </h2>

              <p className="text-sm font-semibold">
                {stat.label}
              </p>

            </Card.Content>

          </Card>

        ))}

      </div>

    </section>
  );
}
