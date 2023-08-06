'use client'
import { Avatar } from "@material-tailwind/react";
import useAuth from "@/hooks/useAuth";

const DashboardSidebar = () => {

  const{user}:any=useAuth()
  const userInfos=[
    {
      img:'https://cdn-icons-png.flaticon.com/128/1144/1144760.png',
      title:'My Profile'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/942/942810.png',
      title:'My Appointments'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/898/898671.png',
      title:'My Prescriptions'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/4108/4108841.png',
      title:'Hospital Payments'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/1431/1431096.png',
      title:'Request Fund'
    },
  ]
    return (
        <div className=' bg-brown-50 w-20 lg:w-72 min-h-screen'>
          <div className="flex flex-col items-center mt-4 font-medium px-3 py-1">
       <Avatar src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/128/149/149071.png'} alt="avatar" size="md" />
          <h1 className="hidden lg:block uppercase text-xl">{user?.displayName}</h1>
          <ul className="mt-8 font-medium">
            {
              userInfos.map((info,i)=>
                <li key={i} className="flex items-center gap-x-2 px-3 py-2 hover:bg-blue-gray-400 rounded">
                  <img src={info.img} alt=""  className="w-[30px]"/>
                  <span className="hidden lg:inline-block">{info.title}</span>
                </li>
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