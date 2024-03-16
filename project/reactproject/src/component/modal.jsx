import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const modal = ({onclose , isopen , children}) => {
  return (
   <>
   {isopen && (<>
    <div className='m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4'>
    <div className='flex justify-end'>
        <AiOutlineClose onClick={onclose}  className='text-2xl cursor-pointer'/>
    </div>
    </div>
    <div onClick={onclose} className='backdrop-blur h-screen w-screen absolute top-0 z-40'/>
   </>
   )}
   </>
  )
}

export default modal