import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // Firebase auth listener
import { auth } from "./firebase"; // Firebase configuration file
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Student from "./pages/Student";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // User is logged out
      }
      setIsAuthChecked(true); // Auth check is completed
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (!isAuthChecked) {
    // Show loading spinner until auth state is checked
    return <div className="flex justify-center items-center h-screen"><div className="spinner-border animate-spin"></div></div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/students"
          element={
            isLoggedIn ? (
              <Student onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
