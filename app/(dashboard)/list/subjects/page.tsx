import FormModal from '@/app/components/FormModal'
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table'
import TableSearch from '@/app/components/TableSearch'
import {role, subjectsData  } from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Subject = {
  id:number,
  name:string,
  teachers:string[]
}


const columns = [
  {
    header:"Subject Name", accessor:"name"
  },
  {
    header:"Teachers", accessor:"teachers", className:"hidden md:table-cell"
  },
 
  {
    header:"Actions", accessor:"actions" 
  },
]
const renderRow = (item:Subject) => 
  (
  <tr key={item.id} className='border-bottom border-gray-200 even:bg-slate-50 text-sm hover:bg-qPurpleLight'>
    <td className='flex items-center gap-4 p-4'> 
        {item.name}
    </td>
    <td className='hidden md:table-cell'>{item.teachers.join(",")}</td>
    <td>
      <div className='flex items-center gap-2'>
        <FormModal table='subject' type="update" data={item}/>
        {role === 'admin' && (
          <FormModal table='subject' type="delete" id={item.id}/>
        )}
      </div>
    </td>
  </tr>
)
const SubjectListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <div className='flex items-center justify-between'> 
          <h1 className='md-block text-lg font-semibold'>All Subjects</h1> 
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
                  <FormModal table='subject' type="create"/> 
                )}
            </div>
          </div>
        </div>
        <Table columns={columns} renderRow={renderRow} data={subjectsData} />
        <div>
          <Pagination />
        </div>
    </div>
  )
}

export default SubjectListPage