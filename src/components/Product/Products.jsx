import React from 'react';
import Image1 from "../../assets/Diamond.jpg";
import Image2 from "../../assets/pearl.png";
import Image3 from "../../assets/yellowpukraj.jpeg"
import Image4 from "../../assets/whitepukraj.jpeg"
import Image5 from "../../assets/Emerald.jpg"
import { FaStar } from "react-icons/fa6";
const ProductsData=[
{
id:1,
img:Image1,
title:"Diamond",
rating:4.4,
    },
    {
        id:2,
        img:Image2,
        title:"Pearl",
        rating:4.3,
    },
    {
                id:3,
                img:Image3,
                title:"Yellow Pukraj",
                rating:4.4, 
     },
     {
        id:4,
        img:Image4,
        title:"White Pukraj",
        rating:4.4, 
},
{
        id:5,
        img:Image5,
        title:"Emerald Panna",
        rating:5, 
},

]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
      {/* Header section */}
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
        <p className='text-sm text-primary font-bold'>Top Selling Products </p>
        <h1 className='text-3xl font-bold'>Products</h1>
      </div>

      
      {/* Body section */}
      <div>
        <div className='grid grid-col-1 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 place-items-center gap-5'> 
        {/* card section */}
        {
            ProductsData.map((data)=>(
                <div 
                //  data-aos="fade-up"
                //  data-aos-delay={data.aosDelay}
                 key={data.id} className='space-y-3'>

                    <img src={data.img} alt="" 
                    className='h-[220px] w-[150px] object-cover rounded-md'
                    />
                    <div>
                        <h3 className='font-semibold'>{data.title}</h3>
                     <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400' />
                        <span>{data.rating}</span>
                        </div>   
                    </div>
                </div>
            ))
        }

        </div>
      </div>
        </div>
    </div>
  )
}

export default Products
