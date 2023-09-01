'use client'
import useUsers from "@/hooks/useUsers";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import axios from "axios";
import {useState } from "react";
import { toast } from "react-toastify";
import AddUserModal from "./AddUserModal";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Users",
    value: "user",
  },
  {
    label: "Doctors",
    value: "doctor",
  },
  {
    label: "Staffs",
    value: "staff",
  },
  {
    label: "Admins",
    value: "admin",
  }
];
 
const TABLE_HEAD = ["User", "Role", "Phone number", "Occupation", "Role Change"];

const AllUsers = () => {
    const[role,setRole]=useState('all')
    const[modalOpen,setModalOpen]=useState(false)
    const {users,mutate,isLoading}=useUsers({role:role})
    const handleTab=(value:string)=>{
      setRole(value)
      mutate()
    }

    const handleUpdateRole=async(id:string,role:string)=>{
      try {
        const res=await axios.put('/api/user/updateUserRole',{id,role})
         if(res?.data?.success===true){
          toast.success('Updated successfully',{
            position:'top-center'
          })
          mutate()
         }
      } catch (error) {
        console.log(error)
      }
    }
    return (
        <Card className=" w-[350px] lg:w-11/12 mx-auto my-12 rounded-none">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button onClick={()=>setModalOpen(!modalOpen)} className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
              <AddUserModal modalOpen={modalOpen} setModalOpen={setModalOpen} mutate={mutate}></AddUserModal>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value} onClick={()=>handleTab(value)}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-auto px-0">
        {
          users?.length>0? <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.map(
              ({ _id,img, name, email, role, officalID, phoneNumber, occupation }:any, index:number) => {
                const isLast = index === users?.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img||'https://cdn-icons-png.flaticon.com/128/149/149071.png'} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {role}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {officalID}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {phoneNumber}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {occupation||'Unknown'}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Change role">  
                          <Menu>
      <MenuHandler>
      <IconButton variant="text">
      <PencilIcon  className="h-4 w-4" />
      </IconButton>
      </MenuHandler>
      <MenuList>
        {
          ['admin','user','doctor','staff'].map((role,i)=>
          <MenuItem key={i} onClick={()=>handleUpdateRole(_id,role)}>{role}</MenuItem>
          )
        }
      </MenuList>
    </Menu>
                  
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table> : <p className="text-center">No related members</p>
        }
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
};

export default AllUsers;