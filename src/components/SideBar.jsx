import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const SideBar = () => {

  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      alert("Logged out successfully!"); // Notify the user
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Failed to logout. Please try again.");
    }
  };

  return (
    <>
    <div className="w-1/5 bg-white h-screen shadow-lg p-6 space-y-8">
      <h1 className="text-xl font-semibold text-gray-700 bg-blue-50 p-4 rounded-lg shadow-md mb-4">
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
