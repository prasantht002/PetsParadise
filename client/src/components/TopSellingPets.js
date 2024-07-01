import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from './Cards';
export default function TopSellingPets() {
  
  const [pet, setPet] = useState([]);

  useEffect(() => {
    const getPet = async ()=>{
      try {
       const res = await axios.get("http://localhost:4001/Pet/getPets");
       const response = res.data;
       console.log(response.pet);
      const data = response.pet.filter((data)=> data.status === "Available")
       setPet(data);
       
      } catch (error) {
        console.log(error);
      }
    
    }
    getPet();
  }, [])
  
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
      <h1 className='font-semibold text-xl pb-2'>Explore Pets</h1>
      <p>Explore our wide range of adoptable pets and discover how you can make a difference in their lives—and yours. Join our community of pet lovers and start your adoption journey today!
      </p>
      </div>
   
    <div>
    <Slider {...settings}>
        {pet.map((item) => (
          <Cards item={item} key={item._id}/>
        ))}
      </Slider>
    </div>
    
    </div>
    </>
  )
}
