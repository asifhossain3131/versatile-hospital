import getDoctorsByDepartment from "@/utils/getDoctorsByDepartment";

export  const revalidate=0

const DepartmentWiseDoctorPage = async({params:{department}}:any) => {
    const doctors=await getDoctorsByDepartment(department)
    return (
        <div>
   department {department}
        </div>
    );
};

export default DepartmentWiseDoctorPage;