import { useAuth } from "../../../context/Authentication/useAuth";
import { validateEmail } from "../../../context/Authentication/authValidation";

export default function InputEmail() {
  const { email, setEmail, emailError, setEmailError } = useAuth();

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(validateEmail(e.target.value));
  };

  return (
    <div>
      <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
        البريد الإلكتروني
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="example@email.com"
        autoComplete="email"
        className={`w-full bg-[#0F172A] border rounded-xl px-4 py-3 text-white placeholder:text-slate-500 outline-none transition ${
          emailError ? "border-red-400" : "border-slate-700 focus:border-[#22D3EE]"
        }`}
      />
      {emailError && (
        <p role="alert" className="mt-2 text-sm text-red-400">
          {emailError}
        </p>
      )}
    </div>
  );
}
