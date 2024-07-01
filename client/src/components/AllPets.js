import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllPets() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const getPet = async () => {
      try {
        const res = await axios.get('http://localhost:4001/Pet/getPets');
        setData(res.data);
        setIsLoading(false); // Once data is fetched, set loading state to false
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Handle error and set loading state to false
      }
    };
    getPet();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {isLoading ? (
          <p>Loading...</p> // Display loading state if data is being fetched
        ) : (
          <>
            {data.pet && data.pet.length > 0 ? (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                {data.pet.map((item) => (
                  <Cards key={item._id} item={item} />
                ))}
              </div>
            ) : (
              <div className="items-center justify-center text-center">
                <br></br>
                <br></br>
                <h1 className="mt-16 text-2xl md:text-4xl">
                  We're delighted to have you{" "}
                  <span className="text-sky-500">Here :) </span>
                </h1>
                <p className="mt-12">
                  At Paws, we believe every pet deserves a loving home.
                  Whether you're looking for a playful puppy, a cuddly kitten,
                  or a loyal senior companion, we connect you with animals in
                  need of a second chance. Explore our wide range of adoptable
                  pets and discover how you can make a difference in their
                  lives—and yours. Join our community of pet lovers and start
                  your adoption journey today!
                </p>
                <Link to="/">
                  <button className="mt-6 bg-sky-500 border-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 duration-300">
                    Back
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
