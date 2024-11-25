"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';

const schema = z.object({
  subject:z.string().min(1, {message: "Subject name is required!"}),  
  class:z.string().min(1, {message: "Class is required!"}), 
  teacher:z.string().min(1, {message: "Teacher is required!"}), 
})

type Inputs = z.infer<typeof schema>;  

const LessonForm = ({type, data}: {type:'create' | 'update'; data?:any;}) => {
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
      <h1 className='text-xl font-semibold'>Create a new lesson</h1> 
      <span className='text-xs text-gray-400 font-medium'>Authentication Information</span>
      <div className='flex flex-wrap gap-4 justify-between'>
        <InputField label='Suject Name' name='subject' defaultValue={data?.subject} register={register} error={errors?.subject} /> 
        <InputField label='Class' name='capacity' defaultValue={data?.class} register={register} error={errors?.class} /> 
      </div> 
      <span className='text-xs text-gray-400 font-medium'>Personal Information</span>
      <div className='flex flex-wrap gap-4 justify-between'>
        <InputField label='Teacher' name='teacher' defaultValue={data?.teacher} register={register} error={errors?.teacher} /> 
      </div>
      <button className='bg-blue-400 text-white p-2 rounded-md'> 
        {type === "create" ? "Create" : "Update"} 
      </button> 
    </form>
  )
}

export default LessonForm; 