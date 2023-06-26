"use client"
import React, { useEffect, useState } from "react";


const PopularParts = () => {
  const [carParts, setCarParts] = useState([]);
 
  useEffect(() => {
    async function fetchCarParts() {
      try {
        const res = await fetch("/carParts.json");
        const data = await res.json();
        setCarParts(data);
      } catch (err) {
        console.error("Error car parts: ", err);
      }
    }
    fetchCarParts()
  },[]);
  return (
    <div>
      <h1 className="text-4xl font-bold  text-center my-10">Shop by Popular Parts</h1>
      <div className="grid grid-cols-1 ml-8 mr-20 md:ml-0 md:mr-0 md:grid-cols-5 gap-5">
        {carParts.map((parts)=>(
            <div className="flex gap-5 border-2 p-2" key={parts.id}>
                <img className="h-20 mt-7" src={parts.image} alt="" />
                <div className="my-10">
                <p>{parts.title}</p>
                <p>{parts.quantity} Products</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default PopularParts;
