export default function BottomCTA({ onOpenApp }) {
  return (
    <section dir="rtl" className="bg-[#0F172A] px-5 py-20">
      <div className="mx-auto max-w-[1180px] rounded-[24px] bg-gradient-to-l from-[#1D4ED8] to-[#38BDF8] px-6 py-16 text-center text-white shadow-[0_15px_40px_rgba(29,78,216,0.2)]">
        <h2 className="mb-3 text-3xl font-black md:text-[44px]">
          جاهز للحفاظ على سيارتك بأعلى كفاءة؟
        </h2>
        <p className="mb-8 text-base opacity-95">
          أضف سيارتك الأولى الآن واستمتع بتجربة صيانة سهلة ومريحة.
        </p>
        <button
          onClick={onOpenApp}
          className="rounded-lg bg-[#0F172A] px-8 py-3 font-extrabold text-[#38BDF8] transition hover:-translate-y-1 hover:bg-[#080D1A]"
        >
          ابدأ مجانًا الآن
        </button>
      </div>
    </section>
  );
}
