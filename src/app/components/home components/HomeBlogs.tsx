'use client'
import React, { useState } from 'react';
import SectionTitle from '../section title/SectionTitle';
import { Button, Card, CardBody, CardHeader, Chip, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import { UserIcon, CalendarDaysIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const HomeBlogs = () => {
   const allBlogs= [
        {
          "id": 1,
          "title": "First Aid Basics",
          "category": "First Aid",
          "img": "https://img.freepik.com/free-photo/group-diverse-people-cpr-training-class_53876-31182.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais",
          "author": "John Doe",
          "date": "2023-06-15",
          "published_in": "Health Magazine",
          "full_blog": "In this blog post, we will explore the essential first aid techniques that everyone should know. From treating minor cuts and burns to performing CPR, we will cover a wide range of first aid basics. By understanding these techniques, you can be better prepared to handle emergencies and potentially save lives."
        },
        {
          "id": 2,
          "title": "Understanding Mental Health",
          "category": "Mental Health",
          "img": "https://img.freepik.com/free-photo/blonde-secretary-sitting-table-while-office-workers-posing-with-thumbs-up-indoor-portrait-happy-asian-manager-trendy-shirt-smiling-conference-hall-with-foreign-partners_197531-3735.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais",
          "author": "Jane Smith",
          "date": "2023-06-20",
          "published_in": "Wellness Weekly",
          "full_blog": "Mental health is a crucial aspect of overall well-being. In this blog post, we will delve into the various aspects of mental health, including common disorders, coping strategies, and seeking professional help. By raising awareness and reducing stigma, we can promote a healthier society where mental well-being is prioritized."
        },
        {
          "id": 3,
          "title": "The Importance of Nutrition",
          "category": "Nutrition",
          "img": "https://img.freepik.com/free-photo/top-view-fresh-foods-spices-vegetables-cooking-white-table_140725-142719.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph",
          "author": "David Johnson",
          "date": "2023-06-25",
          "published_in": "Healthy Living Blog",
          "full_blog": "Proper nutrition plays a vital role in maintaining good health. In this blog post, we will discuss the importance of balanced diets, essential nutrients, and healthy eating habits. By understanding how nutrition impacts our well-being, you can make informed choices to optimize your health and vitality."
        },
        {
          "id": 4,
          "title": "Exercises for a Stronger Core",
          "category": "Fitness",
          "img": "https://img.freepik.com/free-photo/outdoor-shot-active-dark-skinned-man-running-morning-has-regular-trainings-dressed-tracksuit-comfortable-sneakers-concentrated-into-distance-sees-finish-far-away_273609-29401.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph",
          "author": "Emily Wilson",
          "date": "2023-06-28",
          "published_in": "Fitness Today",
          "full_blog": "A strong core is key to overall fitness and functional movement. In this blog post, we will explore a variety of exercises targeting the core muscles, including planks, crunches, and stability ball workouts. By incorporating these exercises into your fitness routine, you can improve posture, stability, and athletic performance."
        },
        {
          "id": 5,
          "title": "Tips for Better Sleep",
          "category": "Sleep",
          "img": "https://img.freepik.com/free-photo/man-sleeping-comfortable-bed_329181-13878.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais",
          "author": "Michael Brown",
          "date": "2023-07-01",
          "published_in": "Sleep Well Magazine",
          "full_blog": "Quality sleep is essential for physical and mental well-being. In this blog post, we will provide practical tips to improve your sleep quality, such as establishing a bedtime routine, creating a sleep-friendly environment, and managing stress. By implementing these strategies, you can enjoy restful nights and wake up feeling refreshed."
        },
        {
          "id": 6,
          "title": "Stress Management Techniques",
          "category": "Stress",
          "img": "https://img.freepik.com/free-photo/successful-female-entrepreneur-blue-collar-shirt_176420-28414.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais",
          "author": "Sarah Thompson",
          "date": "2023-07-05",
          "published_in": "Mindfulness Matters",
          "full_blog": "In today's fast-paced world, managing stress is crucial for overall well-being. In this blog post, we will explore effective stress management techniques, including mindfulness meditation, relaxation exercises, and time management strategies. By incorporating these techniques into your daily life, you can cultivate resilience and maintain a balanced mindset."
        }
      ]
      
      const [open, setOpen] = useState(false);
      const [modalInfo,setModalInfo]=useState(Object)
      const handleModal=(id:number)=>{
           setOpen(!open)
            const target=allBlogs.find(blog=>blog.id===id)
            setModalInfo(target)
      }
    return (
        <div>
            <SectionTitle title='health blogs' subtitle='we understand your concern about health issue and here we offer you some solutions'></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-8'>
               {
                allBlogs.map(({id,title,category,img,author,date,published_in,full_blog})=>
                <div key={id} className='w-96 shadow-lg p-4'>
                     <Image alt='blog' width={384} height={350} src={img}></Image>
                      <Chip variant="ghost" value={category} className='w-32 text-center my-4'/>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2 text-xs'>
                           <UserIcon className='w-[15px]'></UserIcon>
                           <span>{author}</span>
                        </div>
                        <div className='flex items-center gap-x-2 text-xs'>
                           <CalendarDaysIcon className='w-[15px]'></CalendarDaysIcon>
                           <span>{date}</span>
                        </div>
                        <div className='flex items-center gap-x-2 text-xs'>
                           <BookmarkIcon className='w-[15px]'></BookmarkIcon>
                           <span>{published_in}</span>
                        </div>
                      </div>
                      <div className='mt-2'>
                        <h1 className='text-2xl'>{title}</h1>
                        <button onClick={()=>handleModal(id)} className=" text-blue-800 font-medium flex text-sm items-center gap-x-2">View Blog <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" /></button>
                       </div>
                </div>
                )
               }
            </div>
            <Dialog open={open}  handler={handleModal}>
        <DialogHeader>{modalInfo?.title}</DialogHeader>
        <DialogBody>
        <Card className="flex-row w-full max-w-[48rem]">
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
      <Image alt='modalInfo' src={modalInfo?.img} width={384} height={350}></Image>
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="mb-2">
          {modalInfo?.full_blog}
        </Typography>
      </CardBody>
    </Card>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={()=>setOpen(!open)}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
        </div>
    );
};

export default HomeBlogs;