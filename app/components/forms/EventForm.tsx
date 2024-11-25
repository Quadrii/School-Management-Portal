"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
  title:z.string().min(1, {message: "Title is required!"}),  
  class:z.string().min(1, {message: "Class is required!"}), 
  startTime:z.string().min(1, {message: "Start Time is required!"}), 
  endTime:z.string().min(1, {message: "End Time is required!"}), 
  date:z.date({message: "Birthday is required!"}), 
})

type Inputs = z.infer<typeof schema>; 

const EventForm = ({type, data}: {type:'create' | 'update'; data?:any;}) => {
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
      <h1 className='text-xl font-semibold'>Create a new event</h1> 
      <span className='text-xs text-gray-400 font-medium'>Authentication Information</span>
      <div className='flex flex-wrap gap-4 justify-between'>
        <InputField label='Title' name='title' defaultValue={data?.title} register={register} error={errors?.title} /> 
        <InputField label='Class' name='class' defaultValue={data?.email} register={register} error={errors?.class} /> 
      </div> 
      <span className='text-xs text-gray-400 font-medium'>Personal Information</span>
      <div className='flex flex-wrap gap-4 justify-between'>
        <InputField label='Start Time' name='startTime' defaultValue={data?.startTime} register={register} error={errors?.startTime} /> 
        <InputField label='End Time' name='endTime' defaultValue={data?.endTime} register={register} error={errors?.endTime} />
        <InputField label='Date' name='date' type='date' defaultValue={data?.date} register={register} error={errors?.date} /> 
      </div>
      <button className='bg-blue-400 text-white p-2 rounded-md'> 
        {type === "create" ? "Create" : "Update"} 
      </button> 
    </form>
  )
}

export default EventForm; 