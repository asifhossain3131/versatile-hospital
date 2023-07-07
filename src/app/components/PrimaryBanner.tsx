import Image from 'next/image';
import React from 'react'
import AppointmentCard from '../(common)/findDoctors/AppointmentCard';

const PrimaryBanner = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 w-10/12 mx-auto items-center'>
        <div>
     <Image src='https://img.freepik.com/free-psd/interior-modern-emergency-room-with-empty-nurses-station-generative-ai_587448-2017.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph' alt='findDoctors' width={1000} height={800} className=' h-[250px]'></Image>
      </div>
      <div className='flex flex-row lg:flex-col gap-4 mt-4'>
          <AppointmentCard imageUrl='https://cdn-icons-png.flaticon.com/128/3481/3481061.png' title='Looking for a consultant' bgColor='blue-800'></AppointmentCard>
          <AppointmentCard imageUrl='https://cdn-icons-png.flaticon.com/128/55/55281.png' title='schedule appointment' bgColor='blue-500'></AppointmentCard>
      </div>
    </div>
    );
};

export default PrimaryBanner;