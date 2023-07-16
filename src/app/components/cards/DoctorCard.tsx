'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const DoctorCard = ({doctor}:any) => {
    const{name,_id,rank,degrees,title,image,institution}=doctor
    return (
        <Card className="flex-row w-96 h-[230px] rounded-none border">
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-none border">
          <img 
            src={image}
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue" className="uppercase mb-4">{title}</Typography>
          <Typography color="gray" className="font-semibold">
          {name}
          </Typography>
          <Typography color="gray" className="font-normal mb-1">
           {degrees[0]}
          </Typography>
          <Typography color="gray" className="font-normal mb-1">
           {institution}
          </Typography>
          <Typography color="gray" className="font-normal mb-1">
           {rank} consultant
          </Typography>
        </CardBody>
      </Card>
    );
};

export default DoctorCard;