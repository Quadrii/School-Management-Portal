"use client"
import React from 'react'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 80,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 60,
    absent: 10,
  },
  {
    name: 'Wed',
    present: 40,
    absent: 10,
  },
  {
    name: 'Thu',
    present: 70,
    absent: 12
  },
  {
    name: 'Fri',
    present: 55,
    absent: 30,
  },
];


const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <FontAwesomeIcon icon={faEllipsis} size='1x' />
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20} 
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
            <XAxis dataKey="name" axisLine={false} tick={{fill:'#did5db'}} tickLine={false}/>
            <YAxis axisLine={false} tick={{fill:'#did5db'}} tickLine={false} />
            <Tooltip contentStyle={{borderRadius:'10px', borderColor:'lightgray'}}/>
            <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:'20px', paddingBottom:'40px'}}/>
            <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10,10,0,0]}/>
            <Bar dataKey="absent" fill="#C3EBFA"  legendType='circle' radius={[10,10,0,0]}/>
          </BarChart>
        </ResponsiveContainer> 
    </div>
  )
}

export default AttendanceChart;
