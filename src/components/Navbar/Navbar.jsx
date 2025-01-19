import React from 'react'
import Logo from '../../assets/logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from '../DarkMode';

const Menu=[
  {
    id:1,
    name:"Home",
    link:"/#",
  },

  {
    id:2,
    name:"Services",
    link:"/#",
  },
  
  {
    id:3,
    name:"Blog",
    link:"/#",
  },
  {
    id:4,
    name:"Contact",
    link:"/#",
  },
];

const DropdownLinks=[
  {
    id:1,
    name:"Pearl",
    link:"/#",
  },
  
    {
      id:2,
      name:"Diamond",
      link:"/#",
    },
      {
        id:3,
        name:"Pukhraj",
        link:"/#",
      },
        {
          id:4,
          name:"Panna",
          link:"/#",
        },

];

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40                                 '>
        {/* upper navbar */}

      <div className='bg-primary/45 py-2'>
        <div className='container flex justify-between items-center' >


            
            <div>
                <a href="#">
                    <img src={Logo} alt="Logo" 
                    className='w-70 uppercase' />
                   
                </a>
            </div>

            {/* search bar  */}
            <div className='flex justify-between items-center gap-4'>
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
                    <IoMdSearch
                    className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                </div>
            </div>

            {/* order button */}
            <button 
            onClick={() => alert("ordering not available yet")}
           className='bg-gradient-to-r from-primary to-rose-400 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              <span className='group-hover:block hidden transition-all duration-200'>Order</span>
             <FaCartShopping 
             className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>

            {/* Dark mode switch */}
            <div>
              <DarkMode />
            </div>
        </div>
      </div>
        {/* lower navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data)=>(
              <li key={data.id} >
                <a href={data.link}
                className='inline-block px-4 hover:text-primary duration-200'
                >{data.name}</a>
              </li>
            ))
          }
          {/* simple Dropdown and link */}
          <li className='group relative
          cursor-pointer'>
            <a href="#" 
            className='flex items-center gap-[2px] py-2'
            >
              Remedies
              <span>
                <FaCaretDown 
                className='transition-all duration-200 group-hover:rotate-180'
                /> 
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px]
             rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link}
                     className='inline-block w-full rounded-md p-2 hover:bg-primary/30'
                     > {data.name}</a>

                  </li>

                ))}
                
              </ul>
            </div>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
