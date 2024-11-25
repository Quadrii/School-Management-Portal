import FormModal from '@/app/components/FormModal'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import {eventsData, role  } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Event = {
  id:number,
  title:string,
  class:string,
  date:string,
  startTime:string,
  endTime:string
}


const columns = [
  {
    header:"Title", accessor:"title"
  },
  {
    header:"Class", accessor:"class", className:"hidden lg:table-cell"
  },
  {
    header:"Date", accessor:"date", className:"hidden lg:table-cell"
  },
  {
    header:"Start Time", accessor:"startTime", className:"hidden lg:table-cell"
  },
  {
    header:"End Time", accessor:"endTime", className:"hidden lg:table-cell" 
  },
  {
    header:"Actions", accessor:"actions" 
  },
]

const renderRow = (item:Event) => 
  (
  <tr key={item.id} className='border-bottom border-gray-200 even:bg-slate-50 text-sm hover:bg-qPurpleLight'>
    <td className='flex items-center gap-4 p-4'> {item.title}</td>
    <td className='hidden md:table-cell'>{item.class}</td>
    <td className='hidden md:table-cell'>{item.date}</td>
    <td className='hidden md:table-cell'>{item.startTime}</td>
    <td className='hidden md:table-cell'>{item.endTime}</td>
    <td>
      <div className='flex items-center gap-2'>
        <FormModal table='event' type="update" data={item}/>
        {role === 'admin' && (
          <FormModal table='event' type="delete" id={item.id}/>
        )}
      </div>
    </td>
  </tr>
)
const EventListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <div className='flex items-center justify-between'> 
          <h1 className='md-block text-lg font-semibold'>All Events</h1> 
          <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
            <TableSearch /> 
            <div className='flex items-center gap-4 self-end'>
              <button className='w-8 h-8 flex items-center justify-center rounded-full bg-qYellow'> 
                <Image src="/filter.png" alt="filter" width={14} height={14} />
              </button>
              <button className='w-8 h-8 flex items-center justify-center rounded-full bg-qYellow'> 
                <Image src="/sort.png" alt="filter" width={14} height={14}/> 
              </button>
                {role === "admin" && (
                  <FormModal table='event' type="create" /> 
                )}
            </div>
          </div>
        </div>
        <Table columns={columns} renderRow={renderRow} data={eventsData} />
        <div>
          <Pagination /> 
        </div>
    </div>
  )
}

export default EventListPage