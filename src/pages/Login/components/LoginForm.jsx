import { useAuth } from "../../../context/Authentication/useAuth";
import { validateEmail, validatePassword } from "../../../context/Authentication/authValidation";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

export default function LoginForm() {
  const { email, password, setEmailError, setPasswordError, rememberMe, setRememberMe, login } =
    useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailMessage = validateEmail(email);
    const passwordMessage = validatePassword(password);
    setEmailError(emailMessage);
    setPasswordError(passwordMessage);
    if (emailMessage || passwordMessage) return;

    login({ email }, rememberMe);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <InputEmail />
      <InputPassword />

      <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="accent-blue-600"
        />
        تذكرني
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg shadow-blue-600/20"
      >
        تسجيل الدخول
      </button>
    </form>
  );
}
