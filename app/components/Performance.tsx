"use client"
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Group A', value: 92, fill:"#c3ebfa" },
    { name: 'Group B', value: 8, fill:"#fae27c" },
  ];

const Performance = () => {
  return (
    <div className='bg-white rounded-md p-4 h-80 relative'>
        <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Performance</h1>
        <FontAwesomeIcon icon={faEllipsis} size='1x' />
      </div>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
            </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className='text-3xl font-bold'>9.2</h1>
            <p className='text-xs text-gray-300'>of 10 QTS</p>
        </div>
        <h2 className='font-medium absolute bottom-16 left-0 right-0 m-auto text-center'>
            1st Semester - 2nd Semester
        </h2>
    </div>
  )
}

export default Performance