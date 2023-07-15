import PrimaryBanner from "@/app/components/PrimaryBanner";
import getAllDepartments from "@/utils/getAllDepartments";
import DepartmentSearchCard from "./DepartmentSearchCard";
import Link from "next/link";

const FindDoctorsPage = async() => {
const allDepartments= getAllDepartments()
    return (
    <div>
        <PrimaryBanner></PrimaryBanner>
<div className="flex flex-col lg:flex-row gap-4  mx-6 lg:mx-12 my-12">
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {
            allDepartments.sort().map((department,i)=>
          <Link key={i} href={`/findDoctors/${department}`}>
              <div  className="bg-blue-gray-300 lg:w-60 p-4 flex items-center gap-4">
              <div className="bg-gray-400 w-1/4 text-center p-3 text-xl font-bold text-blue-800">
                {department[0]}
              </div>
              <div className="w-full font-semibold">
                {department}
              </div>
              </div>
          </Link>
              )
          }
        </div>
        <DepartmentSearchCard></DepartmentSearchCard>
</div>
    </div>
    );
};

export default FindDoctorsPage;