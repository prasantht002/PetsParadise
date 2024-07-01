import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useForm} from "react-hook-form"    
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'

export default function SignUp() {

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
      fullname: data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res)=>{
      console.log(data);
      if(res.data){
        toast.success('SignUp successfully');
        navigate(from, {replace: true});
      }

      localStorage.setItem("Users", JSON.stringify(res.data.user));

    }).catch(err=>{
      if(err.response){
        console.log(err)
        toast.error("Error : " + err.response.data.message);
      }
      
    })
  }
  return (
    <>
      
     < div id="my_modal_4" className="" >
  <div className="model-box">
    <form method="div">
      {/* if there is a button in form, it will close the modal */}
      
      <Link to='/' className="btn btn-sm btn-circle btn-ghost text-slate-600 absolute right-2 top-12">✕</Link>
    </form>
    <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-12 mt-16 ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className=" text-center text-xl font-bold leading-9 tracking-tight dark:bg-slate-900 dark:text-white text-gray-900">Create your account</h2>
  </div>

  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 " action="#" method="POST">
    <div>
        <label htmlFor="name" className="block text-sm  text-start font-medium leading-6 dark:bg-slate-900 dark:text-white text-gray-900">Name</label>
        <div className="mt-2">
          <input id="name" name="name" type="text"  
           {...register("fullname", { required: true })} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
         {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
      </div>
     
      <div>
        <label htmlFor="email" className="block text-sm text-start  font-medium leading-6 dark:bg-slate-900 dark:text-white text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email1" name="email" type="email"  
              {...register("email", { required: true })} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm text-start  font-medium leading-6 dark:bg-slate-900 dark:text-white text-gray-900">Password</label>
        <div className="mt-2">
          <input id="password1" name="password" type="password"  
              {...register("password", { required: true })} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
      </div>

      <div>
        <button type="submit" className="mt-6 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign up</button>
      </div>
    </form>

    <div className="mt-6 text-center text-sm text-gray-500">
      Already have account?
     
      <button className="font-semibold leading-6 text-sky-500 hover:text-sky-600"
       onClick={()=>{document.getElementById('my_modal_3').showModal()}}
      > 
      Sign in</button>
      <Login></Login>
     
    </div>
  </div>
</div>
  </div>
</div>

    </>
  )
}
