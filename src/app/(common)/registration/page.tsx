import Image from 'next/image';
import React from 'react';
import RegistrationCard from './RegistrationCard';

const RegistrationPage = () => {
    return (
        <div className='relative'>
        <Image className='w-full h-[700px]' alt='login' src={'https://img.freepik.com/free-photo/front-view-female-doctor-holding-stethoscope-with-copy-space_23-2148847617.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'} width={1000} height={200}></Image>
        <RegistrationCard></RegistrationCard>
      </div>
    );
};

export default RegistrationPage;