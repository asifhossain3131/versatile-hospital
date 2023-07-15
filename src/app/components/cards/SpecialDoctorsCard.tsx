'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";


const SpecialDoctorsCard = ({doctor}:any) => {
  const{name,image}=doctor
    return (
        <Card className="w-64">
        <CardHeader floated={false} className="">
          <img src={image} alt="profile-picture" className="h-[200px] w-full"/>
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    );
};

export default SpecialDoctorsCard;