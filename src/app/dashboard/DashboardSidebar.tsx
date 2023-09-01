'use client'
import { Avatar } from "@material-tailwind/react";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";

const DashboardSidebar = () => {

  const{user}:any=useAuth()
  const role:string='user'
  const userInfos=[
    {
      img:'https://cdn-icons-png.flaticon.com/128/942/942810.png',
      title:'My Appointments',
      path:'/dashboard/user/myAppointments'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/898/898671.png',
      title:'My Prescriptions',
      path:''
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/4108/4108841.png',
      title:'Hospital Payments',
      path:'/dashboard/user/myPayments'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/1431/1431096.png',
      title:'Request Fund',
      path:''
    },
  ]
  const adminInfos=[
    {
      img:'https://cdn-icons-png.flaticon.com/128/681/681494.png',
      title:'Hospital Users',
      path:'/dashboard/admin/allUsers'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/1021/1021799.png',
      title:'Add Doctors',
      path:''
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/5586/5586041.png',
      title:'Add Service',
      path:'/dashboard/user/myPayments'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/1945/1945644.png',
      title:'Add Circulars',
      path:''
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/10349/10349144.png',
      title:'Requested Funds',
      path:'/dashboard/'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/5433/5433801.png',
      title:'Notice Board',
      path:'/dashboard/'
    }
  ]
    return (
        <div className=' bg-brown-50 w-20 lg:w-72 min-h-screen'>
          <div className="flex flex-col items-center mt-4 font-medium px-3 py-1">
       <Avatar src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/128/149/149071.png'} alt="avatar" size="md" />
          <h1 className="hidden lg:block uppercase text-lg mt-3">{user?.displayName}</h1>
          <ul className="mt-8 font-medium">
        <Link href={'/dashboard'}>
        <li  className="flex items-center gap-x-2 px-3 py-2 hover:bg-blue-gray-400 rounded">
                  <img src='https://cdn-icons-png.flaticon.com/128/1144/1144760.png' alt=""  className="w-[30px]"/>
                  <span className="hidden lg:inline-block">My Profile</span>
                </li>
        </Link>
            {
              role==='user' && userInfos.map((info,i)=>
              <Link href={info?.path}>
                <li key={i} className="flex items-center gap-x-2 px-3 py-2 hover:bg-blue-gray-400 rounded">
                  <img src={info.img} alt=""  className="w-[30px]"/>
                  <span className="hidden lg:inline-block">{info.title}</span>
                </li>
              </Link>
                )
            }
            {
              role==='admin' && adminInfos.map((info,i)=>
              <Link href={info?.path}>
                <li key={i} className="flex items-center gap-x-2 px-3 py-2 hover:bg-blue-gray-400 rounded">
                  <img src={info.img} alt=""  className="w-[30px]"/>
                  <span className="hidden lg:inline-block">{info.title}</span>
                </li>
              </Link>
                )
            }
              <li  className="flex items-center gap-x-2 px-3 py-2 hover:bg-blue-gray-400 rounded">
                  <img src='https://cdn-icons-png.flaticon.com/128/9208/9208320.png' alt=""  className="w-[30px]"/>
                  <span className="hidden lg:inline-block">Logout</span>
                </li>
              <li className="flex items-center gap-x-2 px-3 py-2 hover:bg-blue-gray-400 rounded">
                  <img src='https://cdn-icons-png.flaticon.com/128/93/93634.png' alt=""  className="w-[30px]"/>
                  <span className="hidden lg:inline-block">Go Back</span>
                </li>
          </ul>
          </div>
        </div>
    );
};

export default DashboardSidebar;