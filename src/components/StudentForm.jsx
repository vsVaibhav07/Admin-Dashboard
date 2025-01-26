import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";

const StudentForm = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    userID:"",
    name: "",
    father_Name: "",
    age: "",
    gender: "",
    phone_no: "",
    email: "",
    class: "",
    section: "",
    roll_no: "",
    course: "",
    admission_Year: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const studentsRef = ref(database, `students`); 
      await push(studentsRef, formData); 
      alert("Data saved successfully!");

   
      setFormData({
        userID: "",
        name: "",
        father_Name: "",
        age: "",
        gender: "",
        phone_no: "",
        email: "",
        class: "",
        section: "",
        roll_no: "",
        course: "",
        admission_Year: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-start pt-10">
      <div className="p-6 w-full max-w-lg h-auto bg-white rounded-xl shadow-md overflow-y-auto max-h-[80vh]">
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">Add Student</h1>
          <h1
            onClick={() => setShowForm(false)}
            className="bg-red-500 cursor-pointer rounded-full w-10 text-center text-white font-bold"
          >
            X
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">ID</label>
            <input
              type="text"
              name="userID"
              value={formData.userID}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Father's Name</label>
            <input
              type="text"
              name="father_Name"
              value={formData.father_Name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Class</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Section</label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Roll Number</label>
            <input
              type="text"
              name="roll_no"
              value={formData.roll_no}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Admission Year</label>
            <input
              type="number"
              name="admission_Year"
              value={formData.admission_Year}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
