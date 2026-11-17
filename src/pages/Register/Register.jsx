
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    if (formData.password.length < 8) {
      setError("كلمة المرور يجب أن تكون 8 أحرف على الأقل");
      return;
    }

    console.log("Register Data:", formData);

    // Connect with backend registration here
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-lg">

        {/* Logo */}
        <Link to="/" className="block text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white">
            AUTO<span className="text-[#22D3EE]">CARE</span>
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            رعايتك لسيارتك تبدأ من هنا
          </p>
        </Link>

        {/* Register Card */}
        <div className="bg-[#172337] border border-slate-700/70 rounded-2xl p-6 sm:p-8 shadow-2xl">

          <div className="text-center mb-7">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/15 flex items-center justify-center text-3xl mb-4">
              👤
            </div>

            <h2 className="text-2xl font-bold text-white">
              إنشاء حساب جديد
            </h2>

            <p className="text-slate-400 text-sm mt-2">
              انضم إلى AutoCare وابدأ الاهتمام بسيارتك
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                الاسم بالكامل
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="أدخل اسمك بالكامل"
                required
                minLength={3}
                className="w-full bg-[#0F172A] border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#22D3EE] transition"
              />
            </div>

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

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                رقم الموبايل
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01xxxxxxxxx"
                required
                pattern="01[0-2,5]{1}[0-9]{8}"
                title="أدخل رقم موبايل مصري صحيح"
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
                  placeholder="8 أحرف على الأقل"
                  required
                  minLength={8}
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                تأكيد كلمة المرور
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="أعد كتابة كلمة المرور"
                  required
                  className="w-full bg-[#0F172A] border border-slate-700 rounded-xl px-4 py-3 pl-16 text-white placeholder:text-slate-500 outline-none focus:border-[#22D3EE] transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#22D3EE]"
                >
                  {showConfirmPassword ? "إخفاء" : "إظهار"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">
                {error}
              </p>
            )}

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 accent-blue-600"
              />

              <span>
                أوافق على شروط الاستخدام وسياسة الخصوصية
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg shadow-blue-600/20"
            >
              إنشاء الحساب
            </button>

          </form>

          {/* Login Link */}
          <div className="text-center mt-6 pt-6 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              لديك حساب بالفعل؟
              <Link
                to="/login"
                className="text-[#22D3EE] font-bold mr-2 hover:text-cyan-300 transition"
              >
                تسجيل الدخول
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
