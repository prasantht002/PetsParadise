import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'


export default function AddPet() {

  const modalRef = useRef(null);

   const[value,setvalue] = useState({
    name:'',
    description:'',
    adoptionFee: 0,
    status:'Available',
    image:''
   })

   const handleChange = (e)=>{
    setvalue({
      ...value,
      [e.target.name]: e.target.value
    })
   }

   const handleSubmission = async(e)=>{
   e.preventDefault()
   try {
    const addPet = await axios.post('http://localhost:4001/Paws/addPet',value);
    const response = addPet.data;
    
    if(response.success){
      // Close the modal after successful submission
      if (modalRef.current) {
        modalRef.current.close();
      }
      toast.success(response.message)

   }

console.log(response)

   } catch (error) {
    console.log(error)
   }
   }

  return (
    <>
    
<dialog id="my_modal_4" className="modal" ref={modalRef}>
  <div className="modal-box w-11/12 max-w-5xl">
  <div className="col-span-full">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
        <form  onSubmit={handleSubmission}>
          <label htmlFor="name" className=" text-left block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-0">
            <input type="text" name="name" id="name" onChange={handleChange} value={value.name}  className=" mb-2 block w-full rounded-md border-0 py-1.5 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
 
          <label htmlFor="description" className="text-left block text-sm font-medium leading-6 text-gray-900">Description</label>
          <div className="mt-0">
            <input type="text" name="description" id="description"  onChange={handleChange} value={value.description} className=" mb-2 block w-full rounded-md border-0 py-1.5 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"/>
          </div>

          <label htmlFor="adoptionFee" className="text-left block text-sm font-medium leading-6 text-gray-900">Adoption Fee</label>
          <div className="mt-0">
            <input type="text" name="adoptionFee" id="adoptionFee" onChange={handleChange} value={value.adoptionFee} className=" mb-2 block w-full rounded-md border-0 py-1.5 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"/>
          </div>


          <div className="sm:col-span-3">
          <label htmlFor="status" className=" text-left block text-sm font-medium leading-6 text-gray-900">Status</label>
          <div className="mt-0">
            <select id="status" name="status"  onChange={handleChange} value={value.status} className=" mb-2 block w-full rounded-md border-0 py-1.5 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6">
             <option value='Available'>Available</option>
              <option value='Adopted'>Adopted</option>
             
              
              
            </select>
          </div>
        </div>

          <label htmlFor="image" className="text-left block text-sm font-medium leading-6 text-gray-900">Image</label>
          <div className="mt-0">
            <input type="text" name="image" id="image" onChange={handleChange} value={value.image}  className="mb-2 block w-full rounded-md border-none py-1.5 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"/>
          </div>
         
<br/>

<button type =' submit' className="btn mr-2 px-6 bg-sky-500 text-white hover:bg-sky-600" >Add</button> 
         
      </form>
        </div>
   
  </div>
</dialog>
    </>
  )
}
