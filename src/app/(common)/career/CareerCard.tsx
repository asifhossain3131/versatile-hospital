'use client'
import useLeftTime from "@/hooks/useLeftTime";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Link from "next/link";


const CareerCard = ({job}:any) => {
 const{jobTitle,deadline,jobType,salary,_id}=job
const is3daysleft=useLeftTime(deadline,3)
    return (
        <Card className="mt-6 bg-gray-100 rounded-none border-b-2  border-b-blue-700">
      <CardBody>
        <h1 className="text-xl text-black mb-2">Title: {jobTitle}</h1>
        <h2>Type: {jobType}</h2>
        <h2>Salary: {salary}</h2>
        <h2 className={`${is3daysleft && 'text-red-700'}`}>Deadline: {deadline}</h2>
      </CardBody>
      <CardFooter className="pt-0">
       <Link href={`/career/${_id}`}><Button size="sm">Read More</Button></Link>
      </CardFooter>
    </Card>
    );
};

export default CareerCard;