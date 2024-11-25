"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
  subjectName:z.string().min(1, {message: "Subject name is required!"}),  
  student:z.string().min(1, {message: "Student is required!"}), 
  score:z.number().min(1, {message: "Score is required!"}), 
  teacher:z.string().min(1, {message: "Teacher is required!"}), 
  class:z.string().min(1, {message: "Class is required!"}), 
  date:z.date({message: "Date is required!"}), 
})

type Inputs = z.infer<typeof schema>; 

const ResultForm = ({type, data}: {type:'create' | 'update'; data?:any;}) => {
  const {
    register,
    handleSubmit, 
    formState:{errors}, 
  } = useForm<Inputs>({ 
    resolver: zodResolver(schema) 
  });
  
  const onSubmit = handleSubmit(data => { 
    console.log(data) 
  }) 
    
  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}> 
      <h1 className='text-xl font-semibold'>Create a new result</h1> 
      <span className='text-xs text-gray-400 font-medium'>Authentication Information</span>
      <div className='flex flex-wrap gap-4 justify-between'>
        <InputField label='SUbject Name' name='subjectName' defaultValue={data?.subjectName} register={register} error={errors?.subjectName} /> 
        <InputField label='Student' name='student' defaultValue={data?.student} register={register} error={errors?.student} /> 
        <InputField label='Score' name='score'  defaultValue={data?.score} register={register} error={errors?.score} /> 
      </div> 
      <span className='text-xs text-gray-400 font-medium'>Personal Information</span>
      <div className='flex flex-wrap gap-4 justify-between'>
        <InputField label='Teacher' name='teacher' defaultValue={data?.teacher} register={register} error={errors?.teacher} /> 
        <InputField label='Class' name='class' defaultValue={data?.class} register={register} error={errors?.class} />
        <InputField label='Date' name='date' type='date' defaultValue={data?.date} register={register} error={errors?.date} /> 
        </div>
      <button className='bg-blue-400 text-white p-2 rounded-md'> 
        {type === "create" ? "Create" : "Update"} 
      </button> 
    </form>
  )
}

export default ResultForm; 