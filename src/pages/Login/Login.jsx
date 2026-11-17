import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // Connect with backend authentication here
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-md">

        {/* Logo */}
        <Link to="/" className="block text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white">
            AUTO<span className="text-[#22D3EE]">CARE</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            رعايتك لسيارتك تبدأ من هنا
          </p>
        </Link>

        {/* Login Card */}
        <div className="bg-[#172337] border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl">

          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/15 flex items-center justify-center text-3xl mb-4">
              🚗
            </div>

            <h2 className="text-2xl font-bold text-white">
              مرحباً بعودتك!
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              سجل دخولك لمتابعة سيارتك وخدماتك
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                البريد الإلكتروني
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="w-full bg-[#0F172A] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#22D3EE] transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                كلمة المرور
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="أدخل كلمة المرور"
                  required
                  className="w-full bg-[#0F172A] border border-slate-700 rounded-xl px-4 py-3 pl-16 text-white placeholder:text-slate-500 outline-none focus:border-[#22D3EE] transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#22D3EE]"
                >
                  {showPassword ? "إخفاء" : "إظهار"}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                />
                تذكرني
              </label>

              <Link
                to="/forgot-password"
                className="text-[#22D3EE] hover:text-cyan-300 transition"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg shadow-blue-600/20"
            >
              تسجيل الدخول
            </button>

          </form>

          {/* Register Link */}
          <div className="text-center mt-7 pt-6 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              ليس لديك حساب؟
              <Link
                to="/register"
                className="text-[#22D3EE] font-bold mr-2 hover:text-cyan-300 transition"
              >
                إنشاء حساب جديد
              </Link>
            </p>
          </div>

        </div>

        <Link
          to="/"
          className="block text-center text-slate-500 text-sm mt-6 hover:text-[#22D3EE] transition"
        >
          ← العودة إلى الصفحة الرئيسية
        </Link>

      </div>
    </div>
  );
}