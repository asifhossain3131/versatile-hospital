'use client'
import React from 'react';
import SectionTitle from '../section title/SectionTitle';
import Image from 'next/image';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";

const HomeContact = () => {
    return (
        <div>
           <SectionTitle title='contact us' subtitle='Do you have any suggestions for us to improve ourself? Feel free to share your opinion'></SectionTitle>
           <div  className='flex w-9/12 flex-col mx-auto lg:flex-row gap-4 lg:gap-x-8 items-center'>
            <div className='relative'>
                <Image src={'https://img.freepik.com/free-photo/doctor-with-mobile-phone-checking-something-digital-tablet_329181-608.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais'} alt='contact' width={400} height={300}></Image>
                <h1 className='absolute top-1/2 left-4 bg-white bg-opacity-50 font-semibold text-2xl p-4'>Help us to improve</h1>
            </div>
            <Card color='transparent' shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Your Suggestions
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <div className="w-full">
      <Textarea label="Message" />
    </div>
        </div>
        <Button className="mt-6" fullWidth>
          Register
        </Button>
      </form>
    </Card>
           </div>
        </div>
    );
};

export default HomeContact;