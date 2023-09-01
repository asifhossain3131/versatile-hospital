'use client'
import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

type Inputs = {
  name: string,
  email: string,
  phoneNumber:string
  occupation:string
};

const AddUserModal = ({modalOpen,setModalOpen,mutate}:any) => {
    const[role,setRole]=useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        try {
            const res=await axios.post('/api/user/createUser',{...data,role})
            if(res?.data?.success===true){
                reset()
                toast.success('New user created')
                await mutate()
                setModalOpen(!modalOpen)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Dialog
        size="xs"
        open={modalOpen}
        handler={()=>setModalOpen(!modalOpen)}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] rounded-none">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-20 place-items-center rounded-none"
          >
            <Typography variant="h4" color="white">
              New User
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
           <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
           <Input {...register("name", { required: true })} label="Name" size="lg" />
            <Input {...register("email", { required: true })} label="Email" size="lg" />
            <Input {...register("phoneNumber", { required: true })} label="Phone" size="lg" />
            <Input {...register("occupation", { required: true })} label="Occupation" size="lg" />
            <Select label="Select Role" onChange={(value:string|undefined)=>setRole(value||'')}>
                {
                    ['admin','user','doctor','staff'].map((role,i)=>
                    <Option key={i} value={role}>{role}</Option>
                    )
                }
      </Select>
      <Button type="submit" variant="gradient" fullWidth>
             Add user
            </Button>
           </form>
          </CardBody>
        </Card>
      </Dialog>
    );
};

export default AddUserModal;