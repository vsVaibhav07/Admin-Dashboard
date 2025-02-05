import React, { useState } from 'react'
import UpdateForm from './UpdateForm';


const Edit = ({student}) => {

  const [showForm,setShowForm]=useState(false);
  
 

  return (
    <div>
      <button
      onClick={()=>setShowForm(true)}
            className="bg-blue-500 text-white p-1 w-full rounded hover:bg-blue-600"
        >
         Edit
        </button>
        <div
          className={`w-1/2 mx-auto mt-8 p-6 text-black bg-white rounded-xl shadow-md ${
            showForm ? "block" : "hidden"
          }`}
        >
          <UpdateForm setShowForm={setShowForm} student={student} />
        </div>
      
      
    </div>
  )
}

export default Edit



    
  

