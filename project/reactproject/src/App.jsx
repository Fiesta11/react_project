import React, { useEffect, useState } from 'react'
import Navbar from './component/navbar'
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from 'react-icons/ai'
import {collection, getDocs} from 'firebase/firestore'
import {db} from './config/firebase'
const App = () => {

  const [contacts , setContacts] = useState([]);

  useEffect(() => {
    const get_contacts = async () =>{
      try {
        const contacts_ref = collection(db , "contacts"); 
        const contact_snap = await getDocs(contacts_ref)
        const contact_list = contact_snap.docs.map((doc) => {
          return {
            id : doc.id,
            ...doc.data(),
          }
        })
        // console.log(contact_list);
        setContacts(contact_list);
      } catch (error) {
       console.log(error); 
      }
    }
    get_contacts();
  } , []);



  return (
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar/>
    <div className='flex gap-2'>
    <div className='flex relative items-center flex-grow'>
        <FiSearch className='text-white text-3xl absolute ml-1 '/>
        <input type="text" className='h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9' />
      </div>
      <AiFillPlusCircle className='text-5xl cursor-pointer text-white'/>
    </div>
    <div>
      {
        
      }
    </div>
    </div>
  
  )
}

export default App