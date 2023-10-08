'use client'

import Image from "next/image"
import { Search } from 'lucide-react';
import { Mails } from 'lucide-react';

import ThemeSwitcher from '../ThemeSwitcher'
import { WindowSize } from "../components/WindowResizer";
import { useEffect } from "react";


const Navbar = () => {
  const {width} = WindowSize();
  console.log(width);
  

  return (
    <div className='flex justify-around md:justify-between ml-8 md:mt-6 mt-2 md:mr-16 items-center text-center'>
      <div className="md:flex md:justify-center md:items-center md:mr-4">
        <h1 className="font-bold md:text-4xl md:mr-4">Dashboard</h1>
        <p className="text-start text-sm md:text-xl">12th Oct 2023</p>
      </div>
      <div className="flex items-center space-x-3 md:space-x-5">
        {width > 760 ? (
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-2xl px-8 h-8 pr-10" // Adicione espaço à direita para o ícone
            />
            <div className="absolute ml-2 right-[240px] top-4 transform -translate-y-1/2">
              <Search 
                size={20}
              />
            </div>
        </div>
        ) : (
          <Search 
            size={20} 
          />
        )}
        <ThemeSwitcher />
        <Mails 
        />
        <Image
          priority
          src='/perfil.png'
          alt='perfil'
          width={40}
          height={40}
          className='h-auto mr-3'
        />
        {width > 500  && <div>
          <h1 className='text-sm md:text-lg font-bold mr-3'>John Smith</h1>
        </div>}
      </div>
    </div>
  )
}

export default Navbar