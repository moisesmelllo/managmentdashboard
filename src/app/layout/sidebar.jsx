'use client'

import Image from 'next/image';
import React from 'react';
import SidebarButtons from '../components/SidebarButtons';
import { WrapText } from 'lucide-react';
import { useState } from 'react';


const Sidebar = () => {
  const [show, setShow] = useState(true)

  function handleClick() {
  setShow(!show)
}

  return (
    <>
      {show ? (
        <div className='flex bg-white text-xl dark:bg-black dark:text-white flex-col h-screen p-2'>
        <WrapText 
          className='mr-4 cursor-pointer'
          onClick={handleClick}
        />
        <div className='flex space-x-2 px-6 absolute mt-4 ml-4'>
          <Image
            priority
            src='/perfil.png'
            alt='perfil'
            width={50}
            height={50}
            className='h-auto'
          />
          <div>
            <h1 className='text-lg font-bold'>John Smith</h1>
            <p className='text-sm'>Ceo, Oxish</p>
          </div>
          
        </div>
        <SidebarButtons />
      </div>) : (
        <div className='p-3 bg-softblue dark:bg-[#444654]'>
        <WrapText 
          className='place-self-end p-0 m-0 cursor-pointer'
          onClick={handleClick}
        />
        </div>
      )}
    </>
  );
};

export default Sidebar;
