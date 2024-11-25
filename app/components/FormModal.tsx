"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import TeacherForm from './forms/TeacherForm';
import StudentForm from './forms/StudentForm';
import ParentForm from './forms/ParentForm';
import AssignmentForm from './forms/AssignmentForm';
import ClassForm from './forms/ClassForm'; 
import EventForm from './forms/EventForm';
import ExamForm from './forms/ExamForm';
import LessonForm from './forms/Lesson';
import ResultForm from './forms/ResultForm';
import AnnouncementForm from './forms/AnnouncementForm'; 
import SubjectForm from './forms/SubjectForm';
import ClassesForm from './forms/ClassForm';

const forms: {
  [key: string]:(type: "create" | "update", data?:any) => JSX.Element;
}={
  teacher:(type, data)=> <TeacherForm type={type} data={data}/>,
  student:(type, data)=> <StudentForm type={type} data={data}/>,
  parent:(type, data)=>  <ParentForm type={type} data={data}/>,
  assignment:(type, data) => <AssignmentForm type={type} data={data}/>,
  class:(type, data)=> <ClassesForm type={type} data={data}/>,
  event:(type, data) => <EventForm type={type} data={data}/>,
  exam:(type, data)=> <ExamForm type={type} data={data}/>,
  lesson:(type, data) => <LessonForm type={type} data={data}/>, 
  result:(type, data) => <ResultForm  type={type} data={data}/>,
  announcement:(type, data) => <AnnouncementForm type={type} data={data}/>, 
  subject:(type, data) => <SubjectForm type={type} data={data}/>
}

const FormModal = ({table,type,data,id}:{
    table:
    "teacher" | 
    "student" | 
    "parent" | 
    "subject" | 
    "class" | 
    "lesson" | 
    "exam" | 
    "assignment" | 
    "result" | 
    "attendance" | 
    "event" | 
    "announcement";
    type: "create" | "update" | "delete"; 
    data?: any;
    id?: number 
}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"
    const bgColor = type === "create" ? "bg-qYellow" : type === "update" ? "bg-qSky" : "bg-qpurple" 

    const [open, setOpen] = useState(false)

    const handleOpenModal = () => {
      setOpen(true)
    }
    const handleCloseModal = () => { 
      setOpen(false)
    }

  const Form = () => {
    return type === "delete" && id ? ( 
      <form action="" className='p-4 flex flex-col gap-4'>
        <span className='text-center font-medium'>
          All data will be lost. Are you sure you want to delete this {table}? 
        </span>
        <button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center'>
          Delete
        </button> 
      </form>
    ) :type === "create" || type === "update" ? ( 
      forms[table](type, data) 
    ) : "Form not found!" 
  }
 
  return (
    <>
      <button onClick={handleOpenModal} className={`${size} flex items-center justify-center rounded-full ${bgColor}`}> 
        <Image src={`/${type}.png`}  alt="" width={16} height={16}/>
      </button>
      {open && (
        <div className='w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center'> 
        <div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg-w[60%] xl:w-[50%] 2xl:w-[40%]'>
          <Form />
          <div className='absolute top-4 right-4 cursor-pointer'>
            <Image onClick={handleCloseModal} src="/close.png" alt='' width={14} height={14}/>
          </div>
        </div>
      </div> 
    )}
    </>
  )
} 

export default FormModal;