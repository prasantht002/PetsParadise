import React from 'react'
import toast from 'react-hot-toast'

export default function Cards({item}) {
    
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card h-[500px] w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
  
    <img src={item.image} className='w-[350px] h-[350px] rounded-2xl' alt="pets" />
   
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className={`badge badge-secondary py-2  border-sky-200 font-thin  ${item.status === 'Available' ? 'text-green-600 bg-green-200' : 'text-red-500 bg-red-200'}`}>{item.status}</div>
    </h2>
    
    <div className="card-actions py-2 justify-start">
      <p className='text-md'>{item.description}</p>
      <div className="badge badge-outline rounded-sm font-bold">${item.adoptionFee}</div> 
      <div className=" items-center ">
        <button className='justify-start mt-10 border-sky-500 cursor-pointer px-3 py-2 rounded-md border-[2px] hover:bg-sky-500 hover:text-white duration-200'
        onClick={()=>{
          if (item.status === 'Adopted') {
            toast.error('This pet is already adopted');
          } else {
            toast.success('Pet added to basket');
            
          }

        }}
        >Adopt Now</button>
        </div>
    </div>
  </div>
</div>
</div>

    </>
  )
}
