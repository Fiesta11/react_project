import React from 'react'
import {RiEditCircleLine} from 'react-icons/ri'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
const contactcard = ({ contact }) => {
  return (
    <div key={contact.id} className='flex bg-yellow justify-between items-center p-2 rounded-lg'>
    <div className='flex gap-1'>
    <HiOutlineUserCircle className='text-4xl text-orange'/>
    <div className=''>
      <h2 className=' font-semibold'>{contact.name}</h2>
      <p className='text-sm'>{contact.email}</p> 
    </div>
    </div>
    <div className='flex text-3xl'>
      <RiEditCircleLine/>
      <IoMdTrash className=' text-orange'/>
    </div>
  </div>
  )
}

export default contactcard