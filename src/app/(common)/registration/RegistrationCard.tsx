"use client";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import useAuth from "@/hooks/useAuth";

type Inputs = {
  name: string
  phoneNumber: string
  email:string
  password:string
}
const RegistrationCard = () => {
  const{createUser,profileUpdate}=useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const formSubmit: SubmitHandler<Inputs> = (data) => {
   const{name,phoneNumber,email,password}=data
 createUser(email,password)
 .then((res:any)=>{
  profileUpdate(name)
  reset()
  console.log(res.user)
 })
 .catch((err:any)=>{
  console.log(err.message)
 })
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
