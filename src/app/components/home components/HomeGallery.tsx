'use client'
import Image from 'next/image';
import React from 'react';

const HomeGallery = () => {
    const images=[
        {
            id:1,
            img:'https://img.freepik.com/free-photo/two-african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare_627829-13783.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
        },
        {
            id:2,
            img:'https://img.freepik.com/free-photo/interior-view-operating-room_1170-2254.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
        },
        {
            id:3,
            img:'https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21202.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
        },
        {
            id:4,
            img:'https://img.freepik.com/free-photo/medical-doctor-girl-working-with-microscope-young-female-scientist-doing-vaccine-research_1157-48128.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
        },
        {
            id:5,
            img:'https://img.freepik.com/free-photo/black-doctor-checking-hospitalized-sick-man-monitoring-sickness-symptom-during-recovery-appointment_482257-2672.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
        },
        {
            id:6,
            img:'https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
        },
        {
            id:7,
            img:'https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph'
        },
        {
            id:8,
            img:'https://img.freepik.com/free-photo/african-male-paramedic-face-protective-medical-mask-standing-front-ambulance-car_627829-4934.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais'
        },
        {
            id:9,
            img:'https://img.freepik.com/free-photo/male-doctor-waving-during-video-call-laptop-medical-clinic_637285-11156.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph'
        }
    ]
    return (
        <div>
          <h1>Gallery</h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mx-12'>
            {
                images.map(({id,img})=>
                <Image key={id} src={img} width={380} height={300} alt='gallery'></Image>
                )
            }
          </div>
        </div>
    );
};

export default HomeGallery;