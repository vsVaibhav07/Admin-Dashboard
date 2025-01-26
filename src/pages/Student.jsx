import React, { useState } from "react";
import SideBar from "../components/SideBar";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

const Student = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="flex">
      <SideBar />

      <div className="bg-blue-50 min-h-screen w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Students</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Add Student
          </button>
        </div>

        <StudentTable />

        <div
          className={`w-1/2 mx-auto mt-8 p-6 bg-white rounded-xl shadow-md ${
            showForm ? "block" : "hidden"
          }`}
        >
          <StudentForm setShowForm={setShowForm} />
        </div>
      </div>
    </div>
  );
};

export default Student;
