import React, { useState } from "react";

const ViewInfo = ({ student }) => {
  const [showData, setShowData] = useState(false);

  return (
    <>
      
      <div className="flex justify-center items-center ">
        <button
          className="bg-blue-500 text-white p-1 m-1 flex items-center  rounded"
          onClick={() => setShowData(true)}
        >
          View
        </button>
      </div>

     
      {showData && (
        <div className="fixed text-black inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
            <h2 className="text-xl font-bold mb-4">{student.name}</h2>

            <table className="w-full border-collapse border border-black text-left">
              <tbody>
                <tr>
                  <th className="border border-black px-4 py-2">ID</th>
                  <td className="border border-black px-4 py-2">{student.userID}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Name</th>
                  <td className="border border-black px-4 py-2">{student.name}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Father's Name</th>
                  <td className="border border-black px-4 py-2">{student.father_Name}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Class</th>
                  <td className="border border-black px-4 py-2">{student.class}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Section</th>
                  <td className="border border-black px-4 py-2">{student.section}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Roll No</th>
                  <td className="border border-black px-4 py-2">{student.roll_no}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Age</th>
                  <td className="border border-black px-4 py-2">{student.age}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Gender</th>
                  <td className="border border-black px-4 py-2">{student.gender}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Course</th>
                  <td className="border border-black px-4 py-2">{student.course}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Phone no</th>
                  <td className="border border-black px-4 py-2">{student.phone_no}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Email</th>
                  <td className="border border-black px-4 py-2">{student.email}</td>
                </tr>

                <tr>
                  <th className="border border-black px-4 py-2">Admission Year</th>
                  <td className="border border-black px-4 py-2">{student.admission_Year}</td>
                </tr>
              </tbody>
            </table>

            
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setShowData(false)}
              >
                Hide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewInfo;
