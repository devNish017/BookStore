import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';
function Logout() {
   const [authUser,setAuthUser]=useAuth();
   const handleLogout=()=>{
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("User")
        toast.success("Logout successfully")
        window.location.reload();
    } catch (error) {
        toast.error("Error: "+error.message)
    }
   }

  return (
    <>
    <div>
        <button onClick={handleLogout}
         className='bg-red-500 font-medium text-white px-2 py-1.5 rounded cursor-pointer'>
            Logout</button>
    </div>
    </>
  )
}

export default Logout