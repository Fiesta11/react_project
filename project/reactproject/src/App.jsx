import React from 'react'
import Navbar from './component/navbar'
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from 'react-icons/ai'
const App = () => {
  return (
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar/>
   <div className='flex'>
   <div className='flex relative items-center flex-grow'>
        <FiSearch className='text-white text-3xl absolute ml-1 '/>
        <input type="text" className='h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9' />
      </div>
   </div>
      <AiFillPlusCircle/>
    </div>
  
  )
}

export default App