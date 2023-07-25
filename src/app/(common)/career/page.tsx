import getAllJobs from '@/utils/getAllJobs';
import React from 'react';
import CareerCard from './CareerCard';
import UsefulLinksCard from '@/app/components/cards/UsefulLinksCard';

const CareerPage = async() => {
    const allJobs=await getAllJobs()
    return (
        <div className='bg-blue-gray-50 p-4 min-h-screen'>
        <h1 className='text-center text-2xl text-blue-800 uppercase mt-4'>Looking for an opportunity?</h1>
        <p className='text-center w-3/4 lg:w-1/2 mx-auto text-gray-600'>We are here to offer you an excellent career with Versatile. Keep your eyes on career page to learn more!</p>
         <div className='mx-6 lg:mx-12 mt-16 flex flex-col lg:flex-row  gap-4'>
           <div className='bg-white lg:w-1/2 p-4'>
            <h1 className='text-xl font-medium'>Current openings: {allJobs.length}</h1>
            <div>
                {
                    allJobs.length>0? allJobs.map((job:any)=>
                    <CareerCard key={job._id} job={JSON.parse(JSON.stringify(job))}></CareerCard>
                    ): <p className='text-red-700 mt-4'>No Current job opening</p>
                }
            </div>
           </div>
           <UsefulLinksCard></UsefulLinksCard>
         </div>
        </div>
    );
};

export default CareerPage;