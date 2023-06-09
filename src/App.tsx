import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigation } from "react-router-dom";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginDummy from "./pages/LoginDummy";
import Auth from "./pages/AuthPage";
import Home from "./pages/Home";
import Preloader from "./components/UI/Preloader";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  useEffect(() => {
    const jwt = Cookies.get("jwt");
    console.log(jwt)
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulating a 1.5-second loading time

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Run only once on mount
  return (
    <>
      {isLoading && <Preloader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/:authMethod" element={<Auth />} />
        <Route path="/auth/" element={<Auth />} />
        <Route
          path="/auth/reset-password/:resetToken"
          element={<ResetPasswordPage />}
        />
        <Route path="/auth/forgot-password/" element={<ForgotPasswordPage />} />
        <Route path="/login-design" element={<LoginDummy />} />
      </Routes>
    </>
  );
}

export default App;
