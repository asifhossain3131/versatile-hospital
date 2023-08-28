import getPersonalAppointments from "@/utils/getPersonalAppointments";
import Link from "next/link";
import MyAppointmentsTable from "./MyAppointmentsTable";

export const revalidate=0

const MyAppointmentsPage =async () => {
    const appointments=await getPersonalAppointments()
    return (
        <div className=" lg:w-9/12 mx-auto text-center">
            <h1 className="font-semibold mt-12 text-xl">My Appointments: {appointments?.length}</h1>
            <div className="mt-12">
             {
                appointments?.length>0? 
                 <MyAppointmentsTable appointments={JSON.parse(JSON.stringify(appointments))}></MyAppointmentsTable>
                :
                <div className="">
                <h1 className="text-red-500 font-semibold mb-2 text-lg">You do not have any appointments.</h1>
                <h2 className="mb-8 text-green-500 font-semibold text-md">Need to appoint a doctor?</h2>
                <Link href={'/doctorAppointment'} className="bg-blue-800 text-white px-4 py-2 rounded-lg">
                Appoint Now
                </Link>
              </div>
             }
            </div>
        </div>
    );
};

export default MyAppointmentsPage;