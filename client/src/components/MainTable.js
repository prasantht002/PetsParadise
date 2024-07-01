import React, { useRef, useState } from 'react'
import PetInfoTable from './PetInfoTable'
import axios from 'axios'
import UpdatePet from './UpdatePet'
import toast from 'react-hot-toast'
import DeletePet from './DeletePet'

export default function MainTable() {
    const[value,setValue] = useState({
    name:'',
    description:'',
    adoptionFee: 0,
    status:'Available',
    image:''
    })

const[updatePetId,setUpdatePetId] = useState()
const[deletePetId,setDeletePetId] = useState('')

const modalRef = useRef(null);
const modalref = useRef(null);

const handleChange = (e)=>{
    setValue({
        ...value,
        [e.target.name]:e.target.value
    })
}

const GetPetId = async (id)=>{
const res = await axios.get(`http://localhost:4001/Paws/getPet/${id}`);
const response = res.data;
console.log(response.getPet.name);
setValue({
    name: response.getPet.name,
    description: response.getPet.description,
    adoptionFee: response.getPet.adoptionFee,
    status: response.getPet.status,
    image: response.getPet.image
})
setUpdatePetId(id)
}

const DeletedPet = (id)=>{
setDeletePetId(id);
console.log(id)
}


const handleSubmission = async(e)=>{
    e.preventDefault()
    try {
        
     const res = await axios.put(`http://localhost:4001/Paws/updatePet/${updatePetId}`,value);
     const response = res.data;

     if (response.success) {
        if (modalRef.current) {
            modalRef.current.close();
          }
       toast.success(response.message)
   }
   else{toast.error(response.message)}

    } catch (error) {
        console.log(error)
    }
}

const handleDelete = async(e)=>{
    try {
    e.preventDefault();
    const res = await axios.delete(`http://localhost:4001/Paws/deletePet/${deletePetId}`);
    const response = res.data;

    console.log(response);
    if(response.success){
        if (modalref.current) {
            modalref.current.close();
          }
        toast.success(response.message)
      }
    } catch (error) {
    console.log(error)
    }
}




  return (
    <>
      <PetInfoTable GetPetId={GetPetId} DeletedPet={DeletedPet}/>
      <UpdatePet value={value} handleChange={handleChange} handleSubmission={handleSubmission} Refr={modalRef}/>
      <DeletePet handleDelete={handleDelete}  refr={modalref}/>
    </>
  )
}
