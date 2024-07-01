import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import AddPet from './AddPet'

export default function PetInfoTable({GetPetId, DeletedPet}) {

const[data,setData]= useState([])
useEffect(()=>{
 async function fetchData(){
    try {
     await axios.get('http://localhost:4001/Paws/getPets')
    .then(response => {
      setData(response.data);
      //console.log(response.data);
    })
    } catch (error) {
        console.log(error)
    }
 } fetchData()
},[data])

  return (

    <>
      <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
          <button  onClick={()=>document.getElementById('my_modal_4').showModal()}
          className='px-4 py-2 bg-sky-500 rounded m-6 r text-white space-evenly flex  text-center items-start' >  Add New Pet <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
</svg>
</button> <AddPet/>
            <table className="min-w-full text-left text-sm font-light">
              
              <thead className="border-b font-medium dark:border-neutral-500">
               
                <tr>
                  <th scope="col" className="px-6 py-4">Name</th>
                  <th scope="col" className="px-6 py-4">Description</th>
                  <th scope="col" className="px-6 py-4">Adoption Fee</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4">Image</th>
                  <th scope="col" className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.pet?.map((ele)=>{
                return(
                    <tr key={ele._id}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ele.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{ele.description}</td>
                    <td className="whitespace-nowrap px-6 py-4">$ {ele.adoptionFee}</td>
                    <td className={`whitespace-nowrap px-6 py-4 ${ele.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>{ele.status}</td>
                    <td className="whitespace-nowrap px-6 py-4"><img className='w-16' src={ele.image} alt=''></img></td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className='flex'> <button onClick={()=>{GetPetId(ele._id);
                        document.getElementById('my_modal_5').showModal()
                      }} > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg></button>
  <button onClick={()=>{DeletedPet(ele._id);
                        document.getElementById('my_modal_6').showModal() }}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg></button></div>
  
  </td></tr>
                )
                })}

                
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
