import FormModal from '@/app/components/FormModal'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import {announcementsData, role  } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link' 
import React from 'react'


type Announcement = {
  id:number,
  title:string,
  class:string,
  date:string
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
    header:"Actions", accessor:"actions" 
  },
]

const renderRow = (item:Announcement) => 
  (
  <tr key={item.id} className='border-bottom border-gray-200 even:bg-slate-50 text-sm hover:bg-qPurpleLight'>
    <td className='flex items-center gap-4 p-4'> {item.title}</td>
    <td className='hidden md:table-cell'>{item.class}</td>
    <td className='hidden md:table-cell'>{item.date}</td>
    <td>
      <div className='flex items-center gap-2'>
        <Link href={`/list/teachers/${item.id}`}>
          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-qSky'>
            <Image src="/edit.png" alt='' width={16} height={16} />
          </button>
        </Link>
        {role === 'admin' && (
          <FormModal table='announcement' type="delete" id={item.id}/>
        )}
      </div>
    </td>
  </tr>
)
const AnnouncementListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <div className='flex items-center justify-between'> 
          <h1 className='md-block text-lg font-semibold'>All Announcements</h1> 
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
                    <FormModal table='announcement' type="create" />
                )}
            </div> 
          </div>
        </div>
        <Table columns={columns} renderRow={renderRow} data={announcementsData} />
        <div>
          <Pagination /> 
        </div>
    </div>
  )
}

export default AnnouncementListPage