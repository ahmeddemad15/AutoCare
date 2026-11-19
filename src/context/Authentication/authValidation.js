const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (!email.trim()) return "البريد الإلكتروني مطلوب";
  if (!EMAIL_PATTERN.test(email)) return "أدخل بريد إلكتروني صحيح";
  return "";
}

export function validatePassword(password) {
  if (!password) return "كلمة المرور مطلوبة";
  if (password.length < 8) return "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
  return "";
}
