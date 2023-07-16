import DoctorCard from "@/app/components/cards/DoctorCard";
import SectionTitle from "@/app/components/section title/SectionTitle";
import getDoctorsByDepartment from "@/utils/getDoctorsByDepartment";

export  const revalidate=0

const DepartmentWiseDoctorPage = async({params:{department}}:any) => {
    const doctors=await getDoctorsByDepartment(department)
    return (
        <div>
        <SectionTitle title={`${department} department`} subtitle=""></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4 w-9/12 mx-auto">
            {
             doctors? doctors.map((doctor:any)=>
              <DoctorCard key={doctor._id} doctor={JSON.parse(JSON.stringify(doctor))}></DoctorCard>
                ) :
                <p className="text-center font-semibold text-red-600">No Doctors Found</p>
            }
        </div>
        </div>
    );
};

export default DepartmentWiseDoctorPage;