'use client'
import React from 'react';
import SectionTitle from '../section title/SectionTitle';
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
    Avatar,
  } from "@material-tailwind/react";
  import {
    BellIcon,
  } from "@heroicons/react/24/solid";
import Image from 'next/image';

const HomeSpecialiaty = () => {
    const allSpecialities=[
        {
          "id": 1,
          "facility": "Modern Technology",
          "details": "Cutting-edge facility equipped with state-of-the-art technologies and innovative medical advancements to deliver advanced treatments",
          "icon":"https://cdn-icons-png.flaticon.com/128/3391/3391458.png"
        },
        {
          "id": 2,
          "facility": "Professional Doctors",
          "details": "Specialized facility staffed with highly skilled and experienced doctors who are dedicated to providing exceptional medical care and expertise.",
          "icon":"https://cdn-icons-png.flaticon.com/128/2874/2874745.png"
        },
        {
          "id": 3,
          "facility": "Affordable Price",
          "details": "Patient-centered facility offering high-quality medical services at affordable prices, ensuring accessible healthcare without compromising on quality.",
          "icon":"https://cdn-icons-png.flaticon.com/128/11036/11036162.png"
        },
        {
          "id": 4,
          "facility": "Help Center",
          "details": "Supportive facility that provides comprehensive assistance, guidance, and resources to patients and their families, promoting overall well-being and emotional support.",
          "icon":"https://cdn-icons-png.flaticon.com/128/1067/1067566.png"
        }
      ]
      
    return (
        <div>
            <SectionTitle title='our speciality' subtitle='Our hospital has professional doctors who provide low cost 24 hour service'></SectionTitle>
            <div className='w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-4'>
            <div className="w-1/2 mx-auto">
      <Timeline>
        {
            allSpecialities.map(({id,facility,details,icon})=>
            <TimelineItem key={id} className=' lg:h-28'>
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-0">
              <Avatar size="sm" src={icon} alt="user 1" withBorder />
            </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                {facility}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                 {details}
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
            )
        }
      </Timeline>
    </div>
    <div className='relative'>
        <Image className='h-[450px]' alt='nurse' src='https://img.freepik.com/free-photo/side-view-doctors-posing_23-2148453492.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais' width={400} height={300}></Image>
        <div className='w-10/12 mx-auto flex items-center gap-4 bg-white absolute bottom-4 left-2'>
            <Image width={400} height={400} src="https://cdn-icons-png.flaticon.com/128/9297/9297719.png" alt="ambulance" />
            <div>
                <h1 className='font-semibold text-lg'>Ambulance Service</h1>
                <h3 className='font-bold text-2xl'>Call: 986543678</h3>
            </div>
        </div>
    </div>
            </div>
        </div>
    );
};

export default HomeSpecialiaty;