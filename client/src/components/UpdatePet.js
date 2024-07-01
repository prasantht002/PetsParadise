import React from 'react'

export default function UpdatePet({value, handleChange, handleSubmission, Refr}) {
    


  return (
    <>
      
      <dialog id="my_modal_5" className="modal" ref={Refr}>
  <div className="modal-box w-11/12 max-w-5xl">
  <div className="col-span-full">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
        <form  onSubmit={handleSubmission}>
          <label htmlFor="name" className="block  text-left text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-0">
            <input type="text" name="name" id="name" onChange={handleChange} value={value.name}  className="block mb-4 w-full text-slate-500 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"/>
          </div>
 
          <label htmlFor="description" className="block text-left text-sm font-medium leading-6 text-gray-900">Description</label>
          <div className="mt-0">
            <input type="text" name="description" id="description"  onChange={handleChange} value={value.description} className="block mb-4 text-slate-500 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"/>
          </div>

          <label htmlFor="adoptionFee" className="block text-left text-sm font-medium leading-6 text-gray-900">Adoption Fee</label>
          <div className="mt-0">
            <input type="text" name="adoptionFee" id="adoptionFee" onChange={handleChange} value={value.adoptionFee} className="block mb-4 w-full rounded-md border-0 py-1.5 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"/>
          </div>


          <div className="sm:col-span-3">
          <label htmlFor="status" className="block text-left text-sm font-medium leading-6 text-gray-900">Status</label>
          <div className="mt-0">
            <select id="status" name="status"  onChange={handleChange} value={value.status} className="block mb-4 w-full rounded-md border-0 py-1.5 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6">
             <option value='Available'>Available</option>
              <option value='Adopted'>Adopted</option>
             
              
              
            </select>
          </div>
        </div>

          <label htmlFor="image" className="block text-left text-sm font-medium leading-6 text-gray-900">Image</label>
          <div className="mt-0">
            <input type="text" name="image" id="image" onChange={handleChange} value={value.image}  className="block mb-4 w-full rounded-md border-none py-1.5 text-slate-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"/>
          </div>
         
<br/>

<button type =' submit' className="btn mr-2 px-6 bg-sky-500 text-white hover:bg-sky-600" >Update</button> 
         
      </form>
        </div>
   
  </div>
</dialog>

    </>
  )
}
