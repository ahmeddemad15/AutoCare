import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

// Never store what the user typed here (SonarCloud flags it); store the backend's token instead later.
const REMEMBER_KEY = "autocare_remembered";

function readRememberedUser() {
  return localStorage.getItem(REMEMBER_KEY) === "true" ? { remembered: true } : null;
}

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(readRememberedUser);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Connect with backend authentication here
  function login(userData, remember) {
    setUser(userData);
    if (remember) {
      localStorage.setItem(REMEMBER_KEY, "true");
    } else {
      localStorage.removeItem(REMEMBER_KEY);
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
    localStorage.removeItem(REMEMBER_KEY);
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
