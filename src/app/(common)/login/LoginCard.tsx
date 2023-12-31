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
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from "react-toastify";
import SocialLoginButton from "@/app/components/buttons/SocialLoginButton";

type Inputs = {
  email:string
  password:string
}
const LoginCard = () => {
    const [hidden,setHidden]=useState(true)
    const[error,setError]=useState('')
    const{signIn}:any=useAuth()
    const search=useSearchParams()
    const {replace}=useRouter()
    const from=search.get('redirectUrl') || '/'
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<Inputs>()
    const formSubmit: SubmitHandler<Inputs> = (data) => {
      setError('')
     const{email,password}=data
   signIn(email,password)
   .then((res:any)=>{
    reset()
    replace(from)
    toast.success('Login successful',{position:'top-center'})
   })
   .catch((err:any)=>{
   setError('User not found!')
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
          <p className="text-red-600">{error}</p>
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
       <SocialLoginButton></SocialLoginButton>
      </Card>
    );
};

export default LoginCard;