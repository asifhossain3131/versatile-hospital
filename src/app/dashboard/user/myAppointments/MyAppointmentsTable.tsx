'use client'
import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Patient name", "Doctor name", "Department", "Date","Type","Status"];

type AppointmentInfo={
    _id:string
    name:string
    doctor:string
    department:string
    date:string
    type:string
    status:string
}
const MyAppointmentsTable = ({appointments}:any) => {
    return (
        <Card className="h-full w-[300px] mx-auto lg:w-full overflow-auto">
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-100 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {appointments?.map(({_id, name,doctor,department, date,type,status}:AppointmentInfo,index:number) => {
            const isLast = index === appointments?.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {doctor}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {department}
                  </Typography>
                </td>
              
                <td className={`${classes} bg-blue-gray-50/50`}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {date || 'Check email'}
                  </Typography>
                </td>
                <td className={`${classes} `}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {type}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                <Typography variant="small" color="blue-gray" className={`font-normal ${status==='pending'?'text-red-600':'text-green-600'}`}>
                    {status}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    );
};

export default MyAppointmentsTable;