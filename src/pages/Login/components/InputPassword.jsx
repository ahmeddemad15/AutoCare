import { useState } from "react";
import { useAuth } from "../../../context/Authentication/useAuth";
import { validatePassword } from "../../../context/Authentication/authValidation";

export default function InputPassword() {
  const { password, setPassword, passwordError, setPasswordError } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(validatePassword(e.target.value));
  };

  return (
    <div>
      <label htmlFor="password" className="block text-sm font-semibold text-slate-200 mb-2">
        كلمة المرور
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          placeholder="أدخل كلمة المرور"
          autoComplete="current-password"
          className={`w-full bg-[#0F172A] border rounded-xl px-4 py-3 pl-16 text-white placeholder:text-slate-500 outline-none transition ${
            passwordError ? "border-red-400" : "border-slate-700 focus:border-[#22D3EE]"
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#22D3EE]"
        >
          {showPassword ? "إخفاء" : "إظهار"}
        </button>
      </div>
      {passwordError && (
        <p role="alert" className="mt-2 text-sm text-red-400">
          {passwordError}
        </p>
      )}
    </div>
  );
}
