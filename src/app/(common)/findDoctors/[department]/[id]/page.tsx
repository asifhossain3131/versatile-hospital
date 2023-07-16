import NewsLetterInputField from '@/app/components/NewsLetterInputField';
import PrimaryButton from '@/app/components/buttons/PrimaryButton';
import SeconderyButton from '@/app/components/buttons/SeconderyButton';
import getDoctorById from '@/utils/getDoctorById';
import Image from 'next/image';
import React from 'react';
export const revalidate=0

const SingleDoctorPage =async ({params:{id}}:any) => {
    const doctor=await getDoctorById(id)
    const{name,department,image,degrees,title,rank,experiences,availableDaysAndTime,description,fees,institution}=doctor
    return (
        <div className=' bg-gray-300'>
           <h1 className='text-center font-semibold lg:text-2xl text-blue-800 mb-4 p-4 bg-white '>Department of {department}</h1>
  <div className=' flex flex-col lg:flex-row gap-4 justify-center mx-6 lg:mx-12'>
  <div className='bg-white lg:w-8/12 p-4 mx-auto'>
<div className='flex gap-4'>
    <Image alt='doctor' src={image} width={200} height={300} className='h-[230px]'></Image>
    <div>
        <h1 className='lg:text-xl text-blue-800 mb-4'>{title}</h1>
        <h2 className='text-gray-600 lg:text-lg font-semibold'>{name}</h2>
        <ul className='flex text-gray-600 '>
            {degrees.map((degree:string,i:number)=><li key={i}>{degree}
            {i < degrees.length - 1 && <span>,</span>}
            </li>)}
        </ul>
        <p className='text-gray-600 mb-2'>{institution}</p>
        <p className='text-gray-700 mb-3'>{rank} consultant</p>
        <SeconderyButton title='Make an appointment'></SeconderyButton>
    </div>
</div>
<div className='p-4 text-gray-600 mt-4'>
    <p>Consultation fee: ${fees}</p>
    <p className='mb-4'>Available Days: {availableDaysAndTime}</p>
    <ul className='list-disc mb-2'>Experiences:
    {
        experiences.map((experience:string,i:number)=>
        <li key={i} className='text-sm'>{experience}</li>
        )
    }
    </ul>
    <div>
        <h5>Short Description:</h5>
        <p className='text-sm'>{description}</p>
    </div>
</div>
            </div>
            {/* left site  */}
            <div className='space-y-2'>
               <div className='bg-white p-4'>
                <Image src={'https://img.freepik.com/free-photo/british-ambulance-parked-parking-lot_53876-63437.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais'} alt='ambulance' width={300} height={300}></Image>
                <h1 className='text-lg text-gray-700 mt-2'>Emergency?</h1>
                <p className='text-gray-700 mb-2'>Call ambulance</p>
                <p className='text-2xl font-semibold text-center text-gray-700'>+5745874454</p>
               </div>
               <div className='bg-white p-4'>
                <h1 className='text-lg text-gray-700 mt-2'>Contact address</h1>
                <div className='text-sm text-gray-600 my-4'>
                    <p>Plot 15, Road 71, Green road, USA-1212 USA</p>
                    <p>Tel: +88 02 8836444, +88 02 8836000</p>
                    <p>Fax: +88 02 8836446</p>
                    <p>Email: info@uhlbd.com</p>
                </div>
                <h1 className='text-lg text-gray-700 mb-2'>Subscribe for newsletter</h1>
                <NewsLetterInputField></NewsLetterInputField>
                <PrimaryButton title='Subscribe'></PrimaryButton>
               </div>
            </div>
            
  </div>
        </div>
    );
};

export default SingleDoctorPage;