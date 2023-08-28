'use client'
import React, { useState } from 'react';
import {UserIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardFooter, CardHeader,   Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem, Dialog, Input, Option, Select, Typography } from "@material-tailwind/react";
import Link from 'next/link';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import useAuth from "@/hooks/useAuth";
import { useRouter } from 'next/navigation';
import getAllDepartments from '@/utils/getAllDepartments';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type Inputs = {
  name: string,
  note:string
};
const SubHeader = () => {
  const{user,logOut}:any=useAuth()
    const [open, setOpen] = React.useState(false);
    const[department,setDepartment]=useState('')
    // const handleOpen = () => setOpen((cur) => !cur);
    const {refresh}=useRouter()
    const allDepartments=getAllDepartments()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    // profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    status:''
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    status:''
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    status:''
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    status:''
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    status:'signOut'
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const handleMenuFunction= async (status:string)=>{
    if(status==='signOut'){
    await logOut()
    const res=await fetch('/api/jwt/logOut',{
      method:'POST'
    })
    const data=await  res.json()
    refresh()
    }
 closeMenu()
  }
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-blue-500 p-0.5"
            src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/128/149/149071.png'}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon,status }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={()=>handleMenuFunction(status)}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

const onSubmit: SubmitHandler<Inputs> = async(data) => {
 const appointmentData={...data,email:user?.email,department}
 try {
   const res=await fetch('/api/doctorAppointment/telemedicine',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(appointmentData)
   })
   const data=await res?.json()
   if(data.success===true){
    toast.success('Appointments placed successfully. Pay to secure it.',{
      position:'top-center'
    })
    setOpen(!open)
   }
 } catch (error:any) {
  toast.error(error?.message)
 }
}
    return (
      <>
        <div className='bg-light-blue-900 p-3 text-white flex justify-between flex-wrap gap-2'>
            <div className='flex gap-x-3'>
                <h1 className='text-sm'>Phone: +88016321485 </h1>|
                <h1 className='text-sm'>Email: versatile@info.com </h1>|
                <h1 className='text-sm'>Everyday: 8:00AM - 10:00PM</h1>
            </div>
            <div className='flex items-center gap-x-3'>
               {
                user? <ProfileMenu></ProfileMenu> :
                <div className='flex items-center gap-x-1 text-md'>
                <UserIcon className='w-[20px]'></UserIcon>
               <Link href='/login'><button>Login</button></Link>
            </div>
               }
                <Button
                onClick={()=>setOpen(!open)}
                variant="gradient"
                size="sm"
              >
                <span>Telemedicine</span>
              </Button>
            </div>
        </div> 
        <Dialog
        size="xs"
        open={open}
        handler={()=>setOpen(!open)}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full rounded-none max-w-[24rem]">
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-28 place-items-center bg-blue-800"
          >
            <Typography variant="h3" color="white">
              Telemedicine
            </Typography>
          </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
            <Input {...register("name", { required: true })} label="Patient name" size="lg" defaultValue={user?.displayName}/>
            <Input label="Patient email" size="lg" value={user?.email} />
            <Input {...register("note", { required: true })} label="Illness" size="lg" />
            <div className="w-full">
      <Select onChange={(value:any)=>setDepartment(value)} value={department} label="Choose a department">
        {
          allDepartments?.sort().map((department,i)=>
          <Option  key={i} value={department}>{department}</Option>
          )
        }
      </Select>
    </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type='submit' variant="gradient" fullWidth>
              Get an appointment
            </Button>
          </CardFooter>
        </form>
        </Card>
      </Dialog>
      </>
    );
};

export default SubHeader;