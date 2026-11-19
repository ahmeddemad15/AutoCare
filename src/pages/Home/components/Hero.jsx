import { Link } from "react-router-dom";
export default function Hero({ onOpenApp, onBrowseCenters }) {
  return (
    <section dir="rtl" className="relative flex min-h-[580px] items-center overflow-hidden bg-[#0F172A]">      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(56,189,248,0.16),transparent_55%),linear-gradient(260deg,#0F172A_20%,#0F172A_65%,#080D1A)]" />
      <div className="relative z-10 w-full px-6 py-16 md:px-[4vw]">
        <div className="max-w-[1180px]">
          <p className="mb-4 font-bold text-[15px] text-[#22D3EE]">
            عربيتك في جيبك بتقنية منعشة
          </p>
          <h1 className="mb-5 max-w-[760px] text-start text-[42px] font-black leading-[1.1] md:text-[72px] lg:text-[92px]">
            اهتم بعربيتك.
            <br />
            احجز.
            <br />
            <span className="bg-gradient-to-l from-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">
              وانطلق بانتعاش.
            </span>
          </h1>
          <p className="mb-8 max-w-[520px] text-[16px] leading-8 text-[#94A3B8] md:text-[17px]">
            راقب عداد الكيلومترات ومواعيد الزيت والفرامل،
            واحجز مع أفضل مراكز الصيانة والغسيل والنانو
            سيراميك بضغطة زر واحدة.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
  to="/login"
  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition"
>
  افتح كراج سياراتك
</Link>
            <button
              onClick={onBrowseCenters}
              className="rounded-lg border border-[#38BDF8] px-7 py-3 font-extrabold text-[#38BDF8] transition hover:bg-[#38BDF8]/10 hover:text-white"
            >
              تصفح المراكز المعتمدة
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-[5%] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex h-[390px] w-[390px] items-center justify-center rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 shadow-[0_0_100px_rgba(56,189,248,0.12)]">
          <div className="flex h-[290px] w-[290px] items-center justify-center rounded-full border border-[#22D3EE]/20">
            
          </div>
        </div>
      </div>
    </section>
  );
}
