import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { auth, database } from "../firebase"; // Import auth
import Delete from "./Delete";
import Edit from "./Edit";
import ViewInfo from "./ViewInfo";

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const user = auth.currentUser; // Get the current logged-in user
    if (!user) {
      alert("User not logged in!");
      return;
    }

    const studentsRef = ref(database, `students/${user.uid}`); // Fetch data under the user's UID
    const unsubscribe = onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const studentsList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setStudents(studentsList);
      } else {
        setStudents([]);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border-separate border-spacing-0 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Class</th>
            <th className="px-4 py-2 text-left">Section</th>
            <th className="px-4 py-2 text-left">Roll no</th>

            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">{student.userID}</td>
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.class}</td>
              <td className="px-4 py-2">{student.section}</td>
              <td className="px-4 py-2">{student.roll_no}</td>
              <td className="px-4 py-2 space-x-2">
                <div className="flex gap-1">
                  <div className="flex w-14 h-8 justify-center bg-red-500 text-white rounded hover:bg-red-700">
                    <Delete studentId={student.id} />
                  </div>
                  <div className="flex w-14 h-8 justify-center bg-blue-500 text-white rounded hover:bg-blue-600">
                    <Edit student={student} />
                  </div>
                  <div className="flex w-14 h-8 justify-center bg-blue-500 text-white rounded hover:bg-blue-600">
                    <ViewInfo student={student} />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
