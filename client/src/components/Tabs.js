import React from 'react';
import MainTable from './MainTable.js';
import ContactTable from "./ContactTable.js"
export default function Tabs() {


 
  return (
    <>

      <section className="py-12 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center mt-10">

            <p className=" text-xl leading-8 font-semibold   sm:text-2xl">
              Welcome to <span className='text-sky-500'>Admin Dashboard!!!</span>
            </p>
            <div className="mt-4 max-w-l  text left text-md  lg:mx-auto">
              <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab " aria-label="ManagePets" checked />
                <div role="tabpanel" className="tab-content p-10"><MainTable /></div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="DisplayContacts" />
                <div role="tabpanel" className="tab-content p-10"><ContactTable /></div>
              </div>
            </div>
          </div>




        </div>
      </section>
    </>
  )
}
