import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

const Body = () => {
  return (
    <div className='flex-1 h-screen bg-softblue dark:bg-[#444654]'>
      <Navbar />
      <Main />
    </div>
  )
}

export default Body