'use client'
import React from 'react';

type Props={
    imageUrl:string,
    title:string,
    bgColor:string
}
const AppointmentCard = ({imageUrl,title,bgColor}:Props) => {
    return (
        <div className={`bg-${bgColor} p-2 text-base w-40 text-white cursor-pointer`}>
        <img className='w-12' src={imageUrl} alt="sideImg" />
        <h2>{title}</h2>
        </div>
    );
};

export default AppointmentCard;