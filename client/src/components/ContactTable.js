import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function ContactTable() {
const[Info,setInfo] = useState([]);

useEffect(()=>{
 async function fetch(){
    try {
        await axios.get('http://localhost:4001/contact/getContact')
        .then(response => {
          setInfo(response.data);
          console.log(response.data);
        })
    
    } catch (error) {
        console.log(error)
    }
 } fetch();
},[])



  return (
    <>
     <div className="flex flex-col">
  <div className="overflow-x-auto ">
    <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full table-sm text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-4">Name</th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-4">Email</th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-4">Phone</th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-4">Message</th>
            </tr>
          </thead>
          <tbody>
            {Info.contact?.map((ele) => (
              <tr key={ele._id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4 font-medium">{ele.name}</td>
                <td className="whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4">{ele.email}</td>
                <td className="whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4">{ele.phone}</td>
                <td className="whitespace-nowrap px-4 py-2 sm:px-6 sm:py-4">{ele.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
