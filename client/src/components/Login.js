import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
   
    const userInfo = {
      email:data.email,
      password:data.password,
      role:data.role
    }
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{
      console.log(data);
      if(res.data){
        toast.success('Login successfully');
        // navigate(from, {replace: true});
        
           // Redirect based on user role
           if (res.data.user.role === 'admin') {
            navigate('/admin', { replace: true }); // Redirect to admin dashboard
          } else {
            navigate('/', { replace: true }); // Redirect to user dashboard
          }
        document.getElementById('my_modal_3').close();
        
        setTimeout(() =>{
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));

        }, 1000); 
      }

    }).catch(err=>{
      if(err.response){
        console.log(err)
        toast.error("Error : " + err.response.data.message);
        setTimeout(()=>{},2000);
      }
      
    })
  }

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost text-slate-600 absolute right-2 top-2">✕</button>
    </form>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-12">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-start"
        >Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" 
           {...register("email", { required: true })} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
              
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label 
          htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <button className="font-semibold text-sky-500 hover:text-sky-600">Forgot password?</button>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" 
           {...register("password", { required: true })} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
      
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign in</button>
      </div>
    </form>

    <div className="mt-10 text-center text-sm text-gray-500">
      Not registered?
      
      <Link to='/signup' className=" font-semibold leading-6 text-sky-600 hover:text-sky-500 cursor-pointer"
     onClick={()=>{document.getElementById('my_modal_3').close();}}
      > Sign up</Link>
    
    </div>
  </div>
</div>
</div>
</dialog>
    </>
  );
}
