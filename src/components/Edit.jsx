import React from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { Database } from 'firebase/database';
import { database } from '../firebase';

const Edit = () => {
  const updateStudent = async (id, updatedData) => {
    try {
      const studentRef = doc(database, "students", id); 
      await updateDoc(studentRef, updatedData);
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div>
      
      
    </div>
  )
}

export default Edit
