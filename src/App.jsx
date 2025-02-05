import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
        setIsLoggedIn(true); 
      } else {
        setIsLoggedIn(false); 
      }
      setIsAuthChecked(true); 
    });

    return () => unsubscribe();
  }, []);

  if (!isAuthChecked) {
    
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
