
import { Button } from "@heroui/react";
import { Car } from "@gravity-ui/icons";

export default function Hero({ onOpenApp, onBrowseCenters }) {

  return (
    <section
      dir="rtl"
      className="relative flex items-center min-h-[580px] bg-[#0F172A] overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-l from-[#0F172A] to-[#080D1A]"></div>

      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 py-16">

        <p className="text-cyan-400 font-bold text-[15px] mb-4">
          ✨ عربيتك في جيبك بتقنية منعشة
        </p>

        <h1 className="text-white text-[42px] md:text-[72px] font-black leading-tight mb-5">
          اهتم بعربيتك.
          <br />
          احجز.
          <br />

          <span className="text-cyan-400">
            وانطلق بانتعاش.
          </span>
        </h1>

        <p className="text-gray-400 text-[16px] leading-8 max-w-[520px] mb-8">
          راقب عداد الكيلومترات ومواعيد الزيت والفرامل،
          واحجز مع أفضل مراكز الصيانة والغسيل والنانو
          سيراميك بضغطة زر واحدة.
        </p>

        <div className="flex flex-wrap gap-3">

          <Button
            onPress={onOpenApp}
            className="bg-blue-600 text-white px-7 py-3 rounded-lg font-bold"
          >
            افتح كراج سياراتك
          </Button>

          <Button
            onPress={onBrowseCenters}
            className="border border-cyan-400 text-cyan-400 px-7 py-3 rounded-lg font-bold"
          >
            تصفح المراكز المعتمدة
          </Button>

        </div>

      </div>

      <div className="absolute left-[5%] hidden lg:flex items-center justify-center w-[390px] h-[390px] rounded-full border border-cyan-400/20 bg-cyan-400/5">

        <Car className="w-48 h-48 text-cyan-400" />

      </div>

    </section>
  );
}
