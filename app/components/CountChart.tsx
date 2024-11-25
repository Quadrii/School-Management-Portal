"use client"
import React from 'react'
import student from '../images/employees.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 50,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#C3EBFA',
  }
];


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <FontAwesomeIcon icon={faEllipsis} size='1x' />
      </div>
      
      <div className='relative w-full h-[75%]'> 
          <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
              <RadialBar
                  background
                  dataKey="count"
              />
              </RadialBarChart>
          </ResponsiveContainer>
          <Image src={student} alt="student" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      <div className='flex justify-center gap-16'> 
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-qSky rounded-full'></div>
          <h1 className='font-bold'>1234</h1>
          <h2 className='text-xs text-gray-500'>Boys (55%)</h2> 
        </div>

        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-qYellow rounded-full'></div>
          <h1 className='font-bold'>1420</h1>
          <h2 className='text-xs text-gray-500'>Girls (40%)</h2>
        </div>
      </div>      
    </div>
  )
}

export default CountChart; 