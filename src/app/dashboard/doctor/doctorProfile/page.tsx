'use client'

import useAuth from "@/hooks/useAuth";
import getAllDepartments from "@/utils/getAllDepartments";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "react-toastify";

type Inputs = {
  name: string
  image: string
  institution:string
  experience1:string
  experience2:string
  availableDaysAndTime:string
}

const page = () => {
    const allDepartments=getAllDepartments()
    const doctorDegrees=['MD','PhD','DDS','DPM']
    const [department,setDepartment]=useState('')
    const [degrees,setDegrees]=useState('')
    const{user}:any=useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = async(data) =>{
       const {name,image,institution,experience1,experience2,availableDaysAndTime}=data
       const  doctorData={email:user?.email,allInfos:[{name,image,institution,availableDaysAndTime,experiences:[experience1,experience2],degrees:[degrees],department}]}
       try {
        const res=await fetch('/api/doctor/doctorProfileUpdate',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(doctorData)
        })
        const  data=await res.json()
        if(data?.success===true){
          toast.success('Form submitted successfully')
        }
        else{toast.error(data?.message)}
       } catch (error) {
        console.log(error)
       }
      }
    return (
        <div>
            <h1 className="text-center mt-8 mb-12 font-semibold uppercase text-xl lg:text-2xl">update doctor profile</h1>
           <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 mx-auto space-y-6">
             <div className="flex flex-col lg:flex-row items-center gap-4">
             <Input {...register("name", { required: true })} label="Full Name"/>
             <Select onChange={(value:any)=>setDepartment(value)} size="md" label="Select Department">
                {
                    allDepartments.map((department,i)=>
                    <Option key={i} value={department}>{department}</Option>
                    )
                }
      </Select>
             </div>
             <div className="flex flex-col lg:flex-row items-center gap-4">
             <Select onChange={(value:any)=>setDegrees(value)}  size="md" label="Select Degree">
                {
                    doctorDegrees.map((degree,i)=>
                    <Option key={i} value={degree}>{degree}</Option>
                    )
                }
      </Select>
             <Input {...register("image", { required: true })} label="Image" />
             </div>
             <div className="flex flex-col lg:flex-row items-center gap-4">
             <Input {...register("institution", { required: true })} label="Graduated From"/>
             <Input {...register("availableDaysAndTime", { required: true })} label="Avilable Days and time" />
             </div>
             <div className="flex flex-col lg:flex-row items-center gap-4">
             <Input {...register("experience1", { required: true })}  label="Previous_Work_1"/>
             <Input {...register("experience2")} label="Previous_Work_2 (if any)" />
             </div>
            <div className="w-1/2 mx-auto text-center mt-8">
            <Button type="submit" className="bg-blue-800 text-center">Submit Form</Button>
            </div>
           </form>
        </div>
    );
};

export default page;