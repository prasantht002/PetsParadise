import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

export default function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            
            toast.success("Logout successfully");

            setTimeout(() =>{
              localStorage.removeItem("Users");
                window.location.reload();
              }, 1000); 
            
        } catch (error) {
            toast.error("Error : " + error.message);
            setTimeout(()=>{}, 2000);
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}>
        Logout</button>
    </div>
  )
}
