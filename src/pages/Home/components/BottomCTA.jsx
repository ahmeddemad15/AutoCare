import { Card, Button } from "@heroui/react";

export default function BottomCTA({ onOpenApp }) {
  return (
    <section
      dir="rtl"
      className="bg-[#0F172A] px-5 py-20"
    >
      <Card className="max-w-[1180px] mx-auto bg-gradient-to-l from-blue-700 to-sky-400 text-white border-none">

        <Card.Content className="text-center py-16 px-5">

          <h2 className="text-3xl md:text-4xl font-black mb-4">
            جاهز للحفاظ على سيارتك بأعلى كفاءة؟
          </h2>

          <p className="mb-8">
            أضف سيارتك الأولى الآن واستمتع بتجربة صيانة سهلة ومريحة.
          </p>

          <Button
            onPress={onOpenApp}
            className="bg-[#0F172A] text-cyan-400 font-bold px-8"
          >
            ابدأ مجانًا الآن
          </Button>

        </Card.Content>

      </Card>
    </section>
  );
}