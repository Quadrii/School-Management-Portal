import React from 'react'
import user from '../images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='hidden md:flex items-center rounded-full gap-2 text-xs ring-[1.5px] ring-gray-300 px-2'> 
        <FontAwesomeIcon icon={faMagnifyingGlass} size='1x' />
        <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none'/>
      </div>
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='rounded-full w-7 h-7 flex justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faMessage} size='1x' />
        </div>

        <div className='rounded-full w-7 h-7 flex justify-center cursor-pointer relative'>
          <FontAwesomeIcon icon={faBullhorn} size='1x' />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-small'>1</div>
        </div>
        <div className='flex flex-col '>
          <span className='text-xs leading-3 font-medium'>John Doe</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <span className='rounded-full cursor-pointer p-2'>
          <Image src={user} alt='user' width={40} height={40}/>
        </span>
      </div>
    </div>
  )
}

export default Navbar;