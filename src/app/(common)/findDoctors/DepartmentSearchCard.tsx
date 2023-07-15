'use client'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Select,
    Option,
  } from "@material-tailwind/react";
  import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import getAllDepartments from "@/utils/getAllDepartments";

const DepartmentSearchCard = () => {
    const allDepartments=getAllDepartments()
    return (
        <div>
           <h1 className='bg-blue-600 p-4 lg:w-96 text-lg text-white'>Select Department</h1>
           <Card className="mt-6 lg:w-96 rounded-none bg-white border">
      <CardBody>
        <MagnifyingGlassCircleIcon className="text-blue-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-4">
          I'm looking for a consultant
        </Typography>
        <div className="w-full">
      <Select label="Search by speciality">
        {
            allDepartments.sort().map((department,i)=>
            <Option key={i}>{department}</Option>
            )
        }
      </Select>
    </div>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Find your doctor
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
        </div>
    );
};

export default DepartmentSearchCard;