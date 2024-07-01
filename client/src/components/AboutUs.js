import React from 'react'

export default function AboutUs() {
  return (
    <>
      <section className="  py-12 bg-white dark:bg-slate-900 dark:text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mt-10">
        <h1 className=" text-black dark:text-white font-semibold   text-2xl">About Us</h1>
        <p className="mt-4 text-xl leading-8 font-semibold   sm:text-2xl">
          Welcome to <span className='text-sky-500'>Paws Adoption Center!!!</span> 
        </p>
        <p className="mt-4 max-w-2xl text-md text-sky-600 lg:mx-auto">
          Your trusted partner in pet adoption and care.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl leading-6 font-medium text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              At Paws Adoption Center, our mission is to find loving homes for every pet. We believe every animal deserves a chance at a happy life. We work tirelessly to rescue, rehabilitate, and rehome pets in need.
            </p>
          </div>
          <div className="md:w-1/2">
            <img className="w-full rounded-lg shadow-lg" src="https://img.freepik.com/free-photo/happy-couple-guys-playing-with-their-dog-backyard-grass-cheerful-old-dog_158595-6535.jpg?t=st=1716643873~exp=1716647473~hmac=1585ae7bf48cbbae401ffbd9e2402f259840ce00593f945dab770158d2002ff8&w=996" alt="Pet Adoption"/>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl leading-6 font-medium text-gray-900 dark:text-white">
              Why Adopt?
            </h3>
            <p className="mt-4 text-lg text-gray-500">
            Adopting a pet saves lives and provides unconditional love. Shelters are full of wonderful animals of all ages and breeds, waiting for a loving home. Adoption is affordable and includes essential vet care, making it a cost-effective choice. Plus, by adopting, you support the fight against animal homelessness and help create a better world for pets and people alike. Join us at PAWS in making a difference, one adoption at a time
            </p>
          </div>
          <div className="md:w-1/2">
            <img className="w-full rounded-lg shadow-lg" src="https://img.freepik.com/free-photo/elderly-person-with-pet-cat_23-2150285639.jpg?t=st=1716644247~exp=1716647847~hmac=b5ef9da3fa1b989f93db4787b5531f321fc53556e9c111346d15ba8eb71f07c4&w=996" alt="Happy Pet"/>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}
