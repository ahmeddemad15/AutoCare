import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const STORAGE_KEY = "autocare_user";

function readSavedUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(readSavedUser);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Connect with backend authentication here
  function login(userData, remember) {
    setUser(userData);
    if (remember) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    setPassword("");
    navigate("/Owner");
  }

  // Connect with backend registration here
  function register({ fullName, email: newEmail }) {
    login({ name: fullName, email: newEmail }, false);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    navigate("/login");
  }

  const value = {
    user,
    isLoggedIn: Boolean(user),
    login,
    register,
    logout,

    email,
    setEmail,
    emailError,
    setEmailError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    rememberMe,
    setRememberMe,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
