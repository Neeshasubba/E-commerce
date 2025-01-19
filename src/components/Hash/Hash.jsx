import React from 'react'
import Image1 from"../../assets/images.jpeg"
import Image2 from "../../assets/Diamond.jpg"
import Image3 from "../../assets/pearl.png"
// import image4 from "../../assets/yellowpukraj.jpeg"
// import Image5 from "../../assets/whitepukraj.jpeg"

const ImageList=[
    {
        id:1,
        img:Image1,
        title:"Get upto 50% off",
        description:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, numquam Dolore atque aperiam eligendi consequatur",
    },
    {
        id:2,
        img:Image2,

    },
    {
        id:3,
        img:Image3,
    },

];
const Hash = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9' >
      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
       
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content section */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
                order-2 sm:order-1 relative z-10'>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Lorem ipsum dolor sit.</h1>
                    <p className='text-sm'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora.
                    </p>
                    <div>
                       <button
                       className='bg-gradient-to-r from-primary to-orange-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                       >Order Now</button>
                    </div>
                </div>
                {/* image section */}
                <div className='order-2 sm:order-2'>
                    <div className='relative z-10'>
                        <img src={Image1} alt="" className='w-[300px] h-[300px] sm:h-[300px] sm:w-[300px] sm:scale-125 object-contain mx-auto' />
                    </div>
                </div>
            </div>

        </div>
        
      </div>
    </div>
  )
}

export default Hash

