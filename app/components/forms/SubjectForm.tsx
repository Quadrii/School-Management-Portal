"use client" 
import { zodResolver } from '@hookform/resolvers/zod'; 
import React from 'react' 
import { useForm } from 'react-hook-form'; 
import { any, z } from 'zod'; 
import InputField from '../InputField'; 

const schema = z.object({
  name:z.string().min(1, {message: "Subject name is required!"}), 
  teachers: z.enum([""]) 
})

type Inputs = z.infer<typeof schema>; 

const SubjectForm = ({type, data}: {type:'create' | 'update'; data?:any;}) => {
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
      <h1 className='text-xl font-semibold'>Create a new subject</h1> 
      <span className='text-xs text-gray-400 font-medium'>Authentication Information</span>
      <div className='flex flex-wrap gap-4 justify-between'>
        <InputField label='Subject Name' name='name' defaultValue={data?.name} register={register} error={errors?.name} /> 
        <InputField label='Teachers' name='teachers' type='teachers' defaultValue={data?.teachers} register={register} error={errors?.teachers} /> 
      </div> 
      <button className='bg-blue-400 text-white p-2 rounded-md'> 
        {type === "create" ? "Create" : "Update"} 
      </button> 
    </form>
  )
}

export default SubjectForm; 