import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-slate-950 flex items-center justify-center px-4"
    >
      <div className="text-center max-w-lg">
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-500 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          الصفحة غير موجودة!
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.
          تأكد من الرابط وحاول مرة أخرى.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
          bg-blue-600 hover:bg-blue-700 text-white font-bold
          transition-all duration-300 shadow-lg shadow-blue-600/20"
        >
          العودة للصفحة الرئيسية
          <span>←</span>
        </Link>
      </div>
    </div>
  );
}
