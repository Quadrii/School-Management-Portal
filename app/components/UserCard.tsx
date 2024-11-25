import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

function UserCard({type}:{type:String}) { 
  return ( 
    <div className='rounded-2xl odd:bg-qpurple even:bg-qYellow p-4 flex-1 min-[w-130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>
          2024/23 
        </span>
        <FontAwesomeIcon icon={faEllipsis} size='1x' className='text-white'/>
      </div>
      <h1 className='text-2xl font-semibold my-4'>1,234</h1> 
      <h2 className='capitalize text-sm font-medium text-gray-500'>{type}s</h2>
    </div>
  )
}

export default UserCard; 









