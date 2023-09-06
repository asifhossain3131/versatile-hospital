"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
import useAuth from "@/hooks/useAuth";
import { Avatar, Badge, Input, Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import useProfile from "@/hooks/useProfile";
import Cookies from "js-cookie";

type Inputs = {
  newName:string
  newPhoneNumber:number
 newAddress:string
 newDateOfBirth:string
 newNationality:string
 newOfficalID:string
 newOccupation:string
}

interface TargetUser {
  _id: string;
  phoneNumber: string;
  address:string
  dateOfBirth:string
  nationality:string
  officalID:string
  occupation:string
  gender:string
  email:string
}
const Dashboard = () => {
  const { user,profileUpdate }: any = useAuth();
const{currentUser,mutate,isLoading}=useProfile(user?.email)
const targetUser=currentUser?.user
  const [CurrentGender, setCurrentGender] = useState<string>("")
  const{phoneNumber,_id,address,dateOfBirth,nationality,officalID,occupation,gender,email}=targetUser ??{}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const handleProfileUpdate: SubmitHandler<Inputs> =(data) =>{
   const {newName,newPhoneNumber,newAddress,newDateOfBirth,newNationality,newOfficalID,newOccupation}=data
   profileUpdate(newName||user?.displayName)
   .then((res:any)=>{
    const updatedName=user?.displayName 
    const email=user?.email
    const updatedInfos={updatedName,newPhoneNumber,newAddress,newDateOfBirth,newNationality,newOfficalID,newOccupation,CurrentGender,email}
    fetch('/api/updateUser',{
     method:'PUT',
     headers:{
      'content-type':'application/json'
     },
     body:JSON.stringify(updatedInfos)
    })
  .then(res=>res.json())
  .then(data=>{
    mutate()
  })
   })
   .catch((err:any)=>{
    console.log(err.message)
   })
   
  }
  return (
    <div className="w-10/12 mx-auto text-center">
      <Badge
        content={<PencilIcon></PencilIcon>}
        overlap="circular"
        placement="bottom-end"
        className="bg-blue-800"
      >
        <Avatar
          src={user?.photoURL}
          size="xxl"
          className="mt-12 mb-4"
          alt="profile picture"
        />
      </Badge>
      <h1 className="text-xs font-medium">{user?.email}</h1>
      <h1 className="text-sm font-medium">#{_id}</h1>
      {isLoading && <h1 className="font-semibold text-xl">Loading.......</h1>}
      <form onSubmit={handleSubmit(handleProfileUpdate)} className="mt-8 space-y-8">
      <div className="flex flex-col lg:flex-row items-center gap-4">
      <Input {...register("newName")} size="md" label="Your Name" defaultValue={user?.displayName} />
      <Input {...register("newPhoneNumber")} size="md" label="Phone number"  defaultValue={phoneNumber} />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
      <Input {...register("newAddress")} size="md" label="Address" defaultValue={address}/>
      <Input {...register("newDateOfBirth")} type="date" size="md" label="Date of birth" defaultValue={dateOfBirth}/>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
      <Input {...register("newNationality")} size="md" label="Nationality" defaultValue={nationality}/>
      <Select  label="Select Gender" defaultValue={gender}>
        <Option onClick={()=>setCurrentGender('male')} value="male">Male</Option>
        <Option onClick={()=>setCurrentGender('female')} value="female">Female</Option>
        <Option onClick={()=>setCurrentGender('others')} value="others">Others</Option>
      </Select>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
      <Input {...register("newOfficalID")} size="md" label="Staff/Doctor ID (For hospital workers only)" defaultValue={officalID}/>
      <Input {...register("newOccupation")} size="md" label="Occupation" defaultValue={occupation}/>
      </div>
      <button type="submit" className="bg-blue-800 text-white px-3 py-1 w-[150px] uppercase font-semibold rounded-lg">Update</button>
      </form>
    </div>
  );
};

export default Dashboard;
