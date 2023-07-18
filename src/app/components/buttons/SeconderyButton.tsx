'use client'
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import useAuth from "@/hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form"

type Props={
    title:string
    doctorName:string
    department:string
}
type Inputs={
name:string
email:string
date:string
phone:number 
doctor:string 
department:string
note:string
}
const SeconderyButton = ({title,doctorName,department}:Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const {user}:any=useAuth()
    const [open, setOpen] = useState(false);
    const handleModal=()=>{
     setOpen(!open)
    }
    const handleAppointment: SubmitHandler<Inputs> = async(data) => {
      try {
        const response = await fetch('/api/doctorAppointment', {
          method: 'POST',
          headers:{
            'content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          const dataInfo = await response.json();
          setOpen(!open)
        reset()
        } else {
          // Handle error, display an error message, etc.
        }
      } catch (error:any) {
       console.log(error.message)
      }
    }
    return (
      <>
        <Button onClick={handleModal} className="bg-blue-800 hover:bg-opacity-50 transition-all shadow-none hover:shadow-none duration-700">{title}</Button>
        <Dialog className="border-none" open={open} handler={handleModal}>
      <DialogHeader className="bg-blue-800 text-white">Make an appointment</DialogHeader>
      <DialogBody >
        <form onSubmit={handleSubmit(handleAppointment)}>
          <div className="flex gap-4">
          <Input {...register("name", { required: true })} type="text" variant="static" value={user?.displayName} placeholder="Name" />
          <Input {...register("email", { required: true })} type="email" variant="static" value={user?.email} placeholder="Email" />
          </div>
          <div className="flex gap-4">
          <Input {...register("date", { required: true })} type="date" variant="static" placeholder="Date" />
          <Input {...register("phone", { required: true })} type="tel" variant="static" placeholder="Phone number" />
          </div>
          <div className="flex gap-4">
          <Input {...register("doctor", { required: true })} variant="static" value={doctorName} placeholder="Doctor name" />
          <Input {...register("department", { required: true })} variant="static" value={department} placeholder="Department" />
          </div>
          <Textarea {...register("note")} variant="static" placeholder="Add a note" />
          <Button type="submit" variant="gradient" color="green" className="rounded-none mt-2">
          <span>Take appointment</span>
        </Button>
        </form>
      </DialogBody>
    </Dialog>
      </>
    );
};

export default SeconderyButton;