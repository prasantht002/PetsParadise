import React from 'react'
import hero from '../images/hero.png'
export default function HeroSection() {
  return (
    <>
    
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
        <div className='w-full  order-2 md:order-1 md:w-1/2 md:mt-16 mt-12 '>
            <div className='space-y-12 mt-8'>
            <h1 className='text-4xl font-bold'>Hello welcome here to Find Your <span className='text-sky-500'> Pawsitively Perfect Companion!!!</span></h1>
            <p className='text-md'>At Paws, we believe every pet deserves a loving home. Whether you're looking for a playful puppy, a cuddly kitten, or a loyal senior companion, we connect you with animals in need of a second chance. Explore our wide range of adoptable pets and discover how you can make a difference in their lives—and yours. Join our community of pet lovers and start your adoption journey today!</p>
          
</div>
<button className="btn hover:bg-sky-600 mt-6 bg-sky-500 text-white">Adopt Now</button>
        </div>
        <div className=' order-1 w-full md:w-1/2'>
            <img className='x-transition:enter="transition ease-out duration-100 transform' src={hero} alt=''></img>
        </div>
      </div>
      
    </>
  )
}
