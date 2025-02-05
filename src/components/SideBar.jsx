import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const SideBar = ({showSidebar,onLogout}) => {

  const navigate = useNavigate();
  const auth = getAuth();

 

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      alert("Logged out successfully!"); 
      onLogout();
      navigate("/login"); 
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Failed to logout. Please try again.");
    }
  };

  return (
    <>
    
    <div className={`"w-1/5 bg-white fixed z-50 h-screen shadow-lg p-6 space-y-8 md:block " ${showSidebar?"w64":"w-0 hidden"}`}>
      <h1 className="text-xl font-semibold text-gray-700 bg-blue-50 p-4 rounded-lg shadow-md mb-4 transition-all duration-1000 ease-in-out">
        Dashboard
      </h1>

      <div
        className="text-lg font-medium text-blue-600 cursor-pointer bg-blue-50 p-4 rounded-lg shadow-md hover:bg-blue-100 transition duration-200"
        onClick={() => navigate("/students")}
      >
        Students
      </div>

      <div
        className="text-lg font-medium text-red-600 cursor-pointer bg-blue-50 p-4 rounded-lg shadow-md hover:bg-blue-100 transition duration-200"
        onClick={handleLogout}
      >
        Logout
      </div>
    </div>
    </>
    
  );
};

export default SideBar;
