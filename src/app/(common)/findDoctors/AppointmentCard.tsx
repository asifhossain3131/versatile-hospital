'use client'
import Image from 'next/image';
import React from 'react';

type Props={
    imageUrl:string,
    title:string,
    bgColor:string
}
const AppointmentCard = ({imageUrl,title,bgColor}:Props) => {
    return (
        <div className={`bg-${bgColor} p-2 text-base w-40 text-white cursor-pointer`}>
        <Image width={400} height={400} className='w-12' src={imageUrl} alt="sideImg" />
        <h2>{title}</h2>
        </div>
    );
};

export default AppointmentCard;