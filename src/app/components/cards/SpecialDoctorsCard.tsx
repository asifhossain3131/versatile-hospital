'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import Image from "next/image";


const SpecialDoctorsCard = ({doctor}:any) => {
  const{name,image,department,degrees}=doctor
    return (
        <Card className="lg:w-64 rounded-none border">
        <CardHeader floated={false} className="rounded-none">
          <Image src={image} width={300} height={200} alt="doctors" className="h-[200px] w-full"></Image>
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h6" color="blue-gray" className="">
          {name}
          </Typography>
          <Typography className="font-medium mb-1" >
          {
            degrees[0]
          }
          </Typography>
          <Typography color="blue" className="font-medium" >
          {department}
          </Typography>
        </CardBody>
      </Card>
    );
};

export default SpecialDoctorsCard;