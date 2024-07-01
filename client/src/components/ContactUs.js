import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function ContactUs() {

    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmission = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4001/contact/creatContact',value)
            const response = res.data;
            if(response.success){
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  
                    <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Contact Us</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmission} className="space-y-4">

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="text" required onChange={handleChange} value={value.name} placeholder='abc' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="email2" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email</label>
                            <div className="mt-2">
                                <input id="email2" name="email" type="email" required onChange={handleChange} value={value.email} placeholder='abc@gmail.com' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Phone</label>
                            <div className="mt-2">
                                <input id="phone" name="phone" type="text" required onChange={handleChange} value={value.phone} placeholder='1342-1234445' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Message</label>
                            <div className="mt-2">
                                <textarea id="message" name="message" type="text" required onChange={handleChange} value={value.message} placeholder='message' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Submit</button>
                        </div>
                    </form>



                </div>
            </div>
        </>
    )
}
