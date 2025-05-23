import { ref, remove } from "firebase/database";
import { useState } from "react";
import { auth, database } from "../firebase"; // Import auth

const Delete = ({ studentId }) => {  
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const user = auth.currentUser; // Get the current logged-in user
            if (!user) {
                alert("User not logged in!");
                return;
            }

            const studentRef = ref(database, `students/${user.uid}/${studentId}`); // Delete data under the user's UID
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
