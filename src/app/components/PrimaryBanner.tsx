import Image from 'next/image';
import React from 'react'
import AppointmentCard from '../(common)/findDoctors/AppointmentCard';
import SectionTitle from './section title/SectionTitle';

const PrimaryBanner = ({title}:any) => {
    const images=[
        'https://img.freepik.com/free-psd/interior-modern-emergency-room-with-empty-nurses-station-generative-ai_587448-2017.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph','https://img.freepik.com/free-photo/interior-view-operating-room_1170-2254.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais','https://img.freepik.com/free-photo/nurse-from-hospital-ward-taking-care-sick-patient-fixing-bed-comfort-african-american-doctor-checking-symptoms-ill-old-man-with-nasal-oxygen-tube-oximeter_482257-27984.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais','https://img.freepik.com/free-photo/glass-designed-building-view_23-2148230382.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais','https://img.freepik.com/free-photo/surgeons-wearing-surgical-loupes-while-performing-operation_107420-64896.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph','https://img.freepik.com/free-photo/group-african-doctors-students-near-medical-university-outdoor_627829-3034.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
    ]
    const randomImageIndex=Math.floor(Math.random()*images.length)
    const randomImage=images[randomImageIndex]
    return (
     <div className='mt-4'>
           <div className='flex flex-col lg:flex-row gap-4 w-10/12 mx-auto items-center'>
        <div>
     <Image src={randomImage} alt='findDoctors' width={1000} height={800} className=' h-[250px]'></Image>
      </div>
      <div className='flex flex-row lg:flex-col gap-4 mt-4'>
          <AppointmentCard imageUrl='https://cdn-icons-png.flaticon.com/128/3481/3481061.png' title='Looking for a consultant' bgColor='blue-800'></AppointmentCard>
          <AppointmentCard imageUrl='https://cdn-icons-png.flaticon.com/128/55/55281.png' title='schedule appointment' bgColor='blue-500'></AppointmentCard>
      </div>
    </div>
    <h1 className='text-center lg:text-2xl my-3 uppercase text-blue-800'>{title}</h1>
     </div>
    );
};

export default PrimaryBanner;