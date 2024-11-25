"use client"
import Announcements from '@/app/components/Announcements'
import BigCalendar from '@/app/components/BigCalendar'
import FormModal from '@/app/components/FormModal'
import Performance from '@/app/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        <div className='w-full xl:w-2/3'>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='bg-qSky py-6 px-4 rounded-md flex-1 flex gap-4'>
                    <div className='w-1/3'>
                        <Image src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Teacher Image" width={144} height={144} className='w-36 h-36 rounded-full object-cover'/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-between gap-4'>
                        <div className='flex items-center gap-4'>
                            <h1 className='text-xl font-semibold'>Leonard Snyder</h1>
                            <FormModal table="teacher" type="update" data={{
                                id:1,
                                username:"deangurero",
                                email:"deangurero@gmail.com",
                                password:"password",
                                firstName:"Dean",
                                lastName:"Guerro",
                                phone:"123456",
                                address:"123, Main str,  anytown, USA",
                                bloodType:"A+",
                                dateOfBirth:"2000-01-01",
                                sex:"Female",
                                img:"https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }}/>
                        </div>
                        <p className='text-sm text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt ducimus soluta est ipsums?
                        </p>
                        <div className='flex items-center justify-between gap-2 flex-wrap text-sm font-medium'>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/date.png" alt='' width={14} height={14}/>
                                <span>January 2025</span>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/mail.png" alt='' width={14} height={14}/>
                                <span>user@gmail.com</span>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/phone.png" alt='' width={14} height={14}/>
                                <span>+1 234 567</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src="/singleAttendance.png" alt='' width={24} height={24} className='w-6 h-6'/>
                        <div>
                            <div className='text-xl font-semibold'>98%</div>
                            <span className='text-sm text-gray-400'>Attendance</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src="/singleBranch.png" alt='' width={24} height={24} className='w-6 h-6'/>
                        <div>
                            <div className='text-xl font-semibold'>2</div>
                            <span className='text-sm text-gray-400'>Branches</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src="/singleLesson.png" alt='' width={24} height={24} className='w-6 h-6'/>
                        <div>
                            <div className='text-xl font-semibold'>6</div>
                            <span className='text-sm text-gray-400'>Lessons</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src="/singleClass.png" alt='' width={24} height={24} className='w-6 h-6'/>
                        <div>
                            <div className='text-xl font-semibold'>6</div>
                            <span className='text-sm text-gray-400'>Classes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
                <h1>Teacher&apos;s Schedule</h1>
                <BigCalendar />
            </div>
        </div>
        <div className='w-full xl:w-1/3'>
        <div className='bg-white p-4 rounded-md'>
            <h1 className='text-xl font-semibold'>Shortcuts</h1>
            <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                <Link className='p-3 rounded-md bg-qSkylight' href="/">Teacher&apos;s Classes</Link>
                <Link className='p-3 rounded-md bg-qPurpleLight' href="/">Teacher&apos;s Students</Link>
                <Link className='p-3 rounded-md bg-qYellowLight' href="/">Teacher&apos;s Lessons</Link>
                <Link className='p-3 rounded-md bg-pink-50' href="/">Teacher&apos;s Exams</Link>
                <Link className='p-3 rounded-md bg-qSkylight' href="/">Teacher&apos;s Assignments</Link> 
            </div>
        </div>
        <Performance />
        <Announcements />
        </div>
    </div>
  )
}

export default SingleTeacherPage