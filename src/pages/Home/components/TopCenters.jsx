import { Card, Button } from "@heroui/react";

const centers = [
  {
    name: "AutoFix Center",
    type: "صيانة ميكانيكية",
    rating: "4.9",
    price: "يبدأ من 300 ج.م",
  },
  {
    name: "Premium Car Care",
    type: "غسيل وتلميع",
    rating: "4.8",
    price: "يبدأ من 200 ج.م",
  },
  {
    name: "Speed Service",
    type: "صيانة وإطارات",
    rating: "4.7",
    price: "يبدأ من 250 ج.م",
  },
];

export default function TopCenters() {
  return (
    <section
      id="centers-sec"
      dir="rtl"
      className="bg-[#0F172A] text-white px-5 py-20"
    >

      <div className="max-w-[1180px] mx-auto">

        <h2 className="text-3xl md:text-4xl font-black mb-3">
          أعلى مراكز الصيانة تقييمًا
        </h2>

        <p className="text-gray-400 mb-9">
          مراكز موثقة ومجربة من أصحاب السيارات بأسعار دقيقة ومواعيد مؤكدة.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          {centers.map((center) => (

            <Card
              key={center.name}
              className="bg-[#142037] border border-[#243C63] text-white hover:border-sky-400 transition"
            >

              <Card.Content className="p-6">

                <div className="h-40 bg-blue-900/30 rounded-xl flex items-center justify-center mb-5">
                  <div className="w-16 h-16 rounded-xl border border-cyan-400/30 bg-cyan-400/10"></div>
                </div>

                <div className="flex justify-between items-center gap-2 mb-4">

                  <span className="text-cyan-400 text-sm">
                    {center.type}
                  </span>

                  <span className="text-yellow-400">
                    ★ {center.rating}
                  </span>

                </div>

                <h3 className="text-xl font-bold mb-3">
                  {center.name}
                </h3>

                <p className="text-gray-400 text-sm mb-5">
                  {center.price}
                </p>

                <Button
                  className="w-full bg-blue-600 text-white"
                  onPress={() => alert("تفاصيل المركز قريبًا")}
                >
                  عرض التفاصيل
                </Button>

              </Card.Content>

            </Card>

          ))}

        </div>
      </div>
    </section>
  );
}