import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    // Connect with backend password reset here
    setSent(true);
  };

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
        </Link>

        <div className="bg-[#172337] border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">نسيت كلمة المرور؟</h2>
            <p className="text-slate-400 text-sm mt-2">
              أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور
            </p>
          </div>

          {sent ? (
            <p className="text-center text-sm text-[#22D3EE] bg-[#22D3EE]/10 p-4 rounded-xl">
              تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                  className="w-full bg-[#0F172A] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#22D3EE] transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg shadow-blue-600/20"
              >
                إرسال الرابط
              </button>
            </form>
          )}

          <div className="text-center mt-7 pt-6 border-t border-slate-700">
            <Link to="/login" className="text-[#22D3EE] font-bold text-sm hover:text-cyan-300 transition">
              العودة إلى تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
