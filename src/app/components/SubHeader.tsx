'use client'
import React from 'react';
import {UserIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Dialog, Input, Option, Select, Typography } from "@material-tailwind/react";
import Link from 'next/link';


const SubHeader = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    return (
      <>
        <div className='bg-light-blue-900 p-3 text-white flex justify-between flex-wrap gap-2'>
            <div className='flex gap-x-3'>
                <h1 className='text-sm'>Phone: +88016321485 </h1>|
                <h1 className='text-sm'>Email: versatile@info.com </h1>|
                <h1 className='text-sm'>Everyday: 8:00AM - 10:00PM</h1>
            </div>
            <div className='flex items-center gap-x-3'>
                <div className='flex items-center gap-x-1 text-md'>
                    <UserIcon className='w-[20px]'></UserIcon>
                   <Link href='/login'><button>Login</button></Link>
                </div>
                <Button
                onClick={handleOpen}
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
        handler={handleOpen}
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
          <CardBody className="flex flex-col gap-4">
            <Input label="Patient name" size="lg" />
            <Input label="Illness" size="lg" />
            <div className="w-full">
      <Select label="Choose a department">
        <Option>Cardiology</Option>
        <Option>Gastrenology</Option>
        <Option>Neurology</Option>
        <Option>Anesthesia</Option>
        <Option>Chest</Option>
      </Select>
    </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Get an appointment
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
      </>
    );
};

export default SubHeader;