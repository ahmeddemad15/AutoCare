import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-md">
        <Link to="/" className="block text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white">
            AUTO<span className="text-[#22D3EE]">CARE</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2">رعايتك لسيارتك تبدأ من هنا</p>
        </Link>

        <div className="bg-[#172337] border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/15 flex items-center justify-center text-3xl mb-4">
              🚗
            </div>
            <h2 className="text-2xl font-bold text-white">مرحباً بعودتك!</h2>
            <p className="text-slate-400 text-sm mt-2">سجل دخولك لمتابعة سيارتك وخدماتك</p>
          </div>

          <LoginForm />

          <div className="text-center mt-7 pt-6 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              ليس لديك حساب؟
              <Link to="/register" className="text-[#22D3EE] font-bold mr-2 hover:text-cyan-300 transition">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </div>

        <Link to="/" className="block text-center text-slate-500 text-sm mt-6 hover:text-[#22D3EE] transition">
          ← العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
