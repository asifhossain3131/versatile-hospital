'use client'
import React from 'react';
import {UserIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import Link from 'next/link';


const SubHeader = () => {
    return (
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
                variant="gradient"
                size="sm"
              >
                <span>Telemedicine</span>
              </Button>
            </div>
        </div>
    );
};

export default SubHeader;