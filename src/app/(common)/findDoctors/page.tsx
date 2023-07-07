'use client'
import PrimaryBanner from "@/app/components/PrimaryBanner";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";


const FindDoctorsPage = async() => {
    // const res=await fetch('../../../../public/test.json')
    // const data=await res.json()
    // console.log(data);
    const allDoctors=[
        {
          "name": "Dr. John Smith",
          "department": "Cardiology",
          "title": "Consultant",
          "rank": "Senior",
          "experiences": [
            {
              "workplace": "ABC Hospital",
              "years": 8
            },
            {
              "workplace": "XYZ Medical Center",
              "years": 5
            }
          ],
          "academic_qualifications": "Bachelor of Medicine, Bachelor of Surgery (MBBS), Doctor of Medicine (MD)",
          "image": "https://example.com/drjohnsmith.jpg"
        },
        {
          "name": "Dr. Emily Johnson",
          "department": "Pediatrics",
          "title": "Pediatrician",
          "rank": "Junior",
          "experiences": [
            {
              "workplace": "DEF Children's Hospital",
              "years": 4
            },
            {
              "workplace": "GHI Pediatrics Clinic",
              "years": 3
            }
          ],
          "academic_qualifications": "Bachelor of Medicine, Bachelor of Surgery (MBBS), Diploma in Child Health (DCH)",
          "image": "https://example.com/dremilyjohnson.jpg"
        },
        {
          "name": "Dr. Sarah Thompson",
          "department": "Dermatology",
          "title": "Dermatologist",
          "rank": "Senior",
          "experiences": [
            {
              "workplace": "JKL Dermatology Center",
              "years": 10
            },
            {
              "workplace": "MNO Skin Clinic",
              "years": 6
            }
          ],
          "academic_qualifications": "Bachelor of Medicine, Bachelor of Surgery (MBBS), Master of Science in Dermatology (MD)",
          "image": "https://example.com/drsarahthompson.jpg"
        },
        {
          "name": "Dr. Robert Davis",
          "department": "Orthopedics",
          "title": "Orthopedic Surgeon",
          "rank": "Senior",
          "experiences": [
            {
              "workplace": "PQR Orthopedic Hospital",
              "years": 12
            },
            {
              "workplace": "STU Sports Medicine Center",
              "years": 8
            }
          ],
          "academic_qualifications": "Bachelor of Medicine, Bachelor of Surgery (MBBS), Doctor of Medicine (MD), Fellowship in Orthopedic Surgery",
          "image": "https://example.com/drrobertdavis.jpg"
        }]
    return (
    <div>
        <PrimaryBanner></PrimaryBanner>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                allDoctors.map(({name,department,title,rank},i)=>
                <Card key={i} className="w-96">
      <CardHeader floated={false} className="">
        <img src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=sph" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
       {name}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
        {department}
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
                )
            }
          </div>
    </div>
    );
};

export default FindDoctorsPage;