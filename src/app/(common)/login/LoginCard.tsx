'use client'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { EyeIcon,EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  email:string
  password:string
}
const LoginCard = () => {
    const [hidden,setHidden]=useState(true)
    const{signIn}=useAuth()
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<Inputs>()
    const formSubmit: SubmitHandler<Inputs> = (data) => {
     const{email,password}=data
   signIn(email,password)
   .then((res:any)=>{
    reset()
    console.log('login successful')
   })
   .catch((err:any)=>{
    console.log(err.message)
   })
    }
    return (
        <Card color="white" className="absolute top-6 left-8 lg:left-16 p-4" shadow={false}>
        <Typography variant="h4" color="blue-gray">
         Login
        </Typography>
        <form  onSubmit={handleSubmit(formSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input {...register("email", { required: true })} type="email" size="lg" label="Email" />
            <Input {...register("password", { required: true })} type={hidden? 'password':'text'} label="Password" icon={hidden? <EyeIcon onClick={()=>setHidden(!hidden)} className="cursor-pointer"></EyeIcon> : <EyeSlashIcon className="cursor-pointer" onClick={()=>setHidden(!hidden)}></EyeSlashIcon>} />
          </div>
          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Do not have an account?
            <Link
             href={'/registration'}
              className="font-medium text-blue-500 transition-colors ml-2 hover:text-blue-700"
            >
             Register
            </Link>
          </Typography>
        </form>
        <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 justify-center"
      >
        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>
      </Card>
    );
};

export default LoginCard;