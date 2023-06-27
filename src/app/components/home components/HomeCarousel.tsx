'use client'
import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

const HomeCarousel = () => {
   const allSliders= [
        {
          "id": 1,
          "title": "Emergency Care",
          "description": "24/7 emergency medical services for critical conditions.",
          "img": "https://img.freepik.com/free-photo/doctors-nurse-pushing-female-patient-stretcher-corridor-hospital_662251-3073.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais"
        },
        {
          "id": 2,
          "title": "Surgical Procedures",
          "description": "Advanced surgical interventions performed by skilled surgeons.",
          "img": "https://img.freepik.com/free-photo/ordinary-busy-day-surgeon_329181-19717.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais"
        },
        {
          "id": 3,
          "title": "Diagnostic Imaging",
          "description": "State-of-the-art imaging technologies for accurate diagnosis.",
          "img": "https://img.freepik.com/free-photo/female-doctor-putting-oxygen-mask-patient-face_107420-63869.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais"
        },
        {
          "id": 4,
          "title": "Maternity Services",
          "description": "Comprehensive care for expecting mothers and newborns.",
          "img": "https://img.freepik.com/free-photo/portrait-pregnant-woman-sitting-hospital-ward-bed-looking-camera-young-person-smiling-waiting-child-delivery-parenthood-medical-clinic-adult-with-baby-bump_482257-27979.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais"
        },
        {
          "id": 5,
          "title": "Specialized Clinics",
          "description": "Dedicated clinics for specific medical specialties.",
          "img": "https://img.freepik.com/free-photo/doctor-checking-diagnosis-paralyzed-disabled-senior-woman-wheelchair-sitting-reception-room_482257-3449.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais"
        }
      ]
      
    return (
        <Carousel className="">
            {
          allSliders.map(({id,title,description,img})=>
          <div key={id} className="relative h-full w-full">
        <img src={img} alt="" className='w-full h-[500px]'/>
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
             {description}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="md" className='bg-light-blue-900'>
                  Learn more
                </Button>
                <Button size="md" className='bg-blue-800'>
                 Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
          )
            }
       
      </Carousel>
    );
};

export default HomeCarousel;