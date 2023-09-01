'use client'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Chip,
  Tabs,
  TabsHeader,
  Tab
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Successful",
    value: "paid",
  },
  {
    label: "Pending",
    value: "pending",
  },
];
 
const TABLE_HEAD = ["Payment ID", "Paymant For", "Doctor/Test Name", "Date","Fees", "Status","Trans. ID"];

const PaymentTable = () => {
    const [payments,setPayments]=useState([])
    const[type,setType]=useState('')
    useEffect(()=>{
        const fetchPayments=async()=>{
        const status={status:type}
         const res=await fetch('/api/getPayments',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(status)
         })
            const data=await res.json()
            if(data?.successful===true){
            setPayments(data?.payments)
            }
        }
        fetchPayments()
    },[type])

    const handlePayments=paymentId=>{
      const paymentInfo={paymentId}
      fetch('/api/makePayment',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(paymentInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.successful===true){
          window.location.replace(data?.url)
        }
      })
    }
    return (
        <Card className="w-[400px] lg:w-11/12 mx-auto my-12 rounded-none">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value} onClick={()=>setType(value==='all'?'':value)}>
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
          <table className="mt-4 w-full min-w-max table-auto text-left">
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
              {payments?.map(
                ({ paymentId,paymentsFor,paymentCreated,package:packageName,packagePrice,status,transId, gateway }, index) => {
                  const isLast = index === payments.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
   
                  return (
                    <tr key={paymentId}>
                      <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {paymentId}
                            </Typography>
                      </td>
                      <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {paymentsFor}
                          </Typography>
                      </td>
                      <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {packageName}
                          </Typography>
                      </td>
                      <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {paymentCreated}
                          </Typography>
                      </td>
                      <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {packagePrice}
                          </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={status==='pending' ? "Pending" : "Paid"}
                            color={status==='pending' ? "red" : "green"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {transId||<button onClick={()=>handlePayments(paymentId)} className="font-semibold">Pay Bill</button>}
                        </Typography>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    );
};

export default PaymentTable;