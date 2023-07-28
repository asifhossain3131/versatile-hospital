"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import useAuth from "@/hooks/useAuth";
import { toast } from "react-toastify";

type Inputs = {
  name: string
  phoneNumber: string
  email:string
  password:string
  confirmPassword:string
}
const RegistrationCard = () => {
  const{createUser,profileUpdate}:any=useAuth()
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<Inputs>()
  const formSubmit: SubmitHandler<Inputs> =async (data) => {
   const{name,phoneNumber,email,password}=data 
   const user={name,phoneNumber,email,role:'user'}
   const toastId=toast.loading('Registering new user',{position:'top-center'})
 try {
  await createUser(email,password)
  await profileUpdate(name)
  const res=await fetch('../../api/createUser',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  const data=await res.json()
  toast.dismiss(toastId)
  toast.success('Registration successful',{position:'top-center'})
  reset()
 } catch (error:any) {
  toast.dismiss(toastId)
  toast.error(error?.message||'Something went wrong',{position:'top-center'})
 }
  }
  return (
    <Card
      color="white"
      className="absolute top-6 right-8 lg:right-16 p-4"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Create an account
      </Typography>
      <form onSubmit={handleSubmit(formSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"> 
        <div className="mb-4 flex flex-col gap-6">
          <Input {...register("name", { required: true })} type="text" size="lg" label="Name" />
          <Input  {...register("phoneNumber", { required: true })} type="tel" size="lg" label="Phone number" />
          <Input  {...register("email", { required: true })} type="email" size="lg" label="Email" />
          <Input  {...register("password", { required: true })} type="password" size="lg" label="Password" />
          <Input  {...register("confirmPassword", { required: true,
          validate: (value)=>value===getValues('password') || 'The password do not match'
          })} type="password" size="lg" label="Confirm Password" />
          {
            errors.confirmPassword && (<span className="text-red-600">{errors.confirmPassword.message||'Please provide correct password'}</span>)
          }
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?
          <Link
            href={"/login"}
            className="font-medium text-blue-500 transition-colors ml-2 hover:text-blue-700"
          >
            Login
          </Link>
        </Typography>
      </form>
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 justify-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Google
      </Button>
    </Card>
  );
};

export default RegistrationCard;
