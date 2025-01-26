import React, { useState } from "react";
import { ref, remove } from "firebase/database";
import { database } from "../firebase";

const Delete = ({ studentId }) => {  
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const studentRef = ref(database, `students/${studentId}`); 
            

            await remove(studentRef);
            alert("Student data deleted successfully!");
        } catch (error) {
            console.error("Error deleting student data:", error);
            alert("An error occurred while deleting the data.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-red-500 text-white p-1 w-auto rounded hover:bg-red-600"
        >
            {isDeleting ? "Deleting..." : "Delete"}
        </button>
    );
};

export default Delete;
