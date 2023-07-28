import UsefulLinksCard from "@/app/components/cards/UsefulLinksCard";
import { getSingleJobFromDb } from "@/services/career.service";

const SinleJobDetailPage = async ({ params }: any) => {
  const job = await getSingleJobFromDb(params.id);
  const {
    jobTitle,
    educationalRequirements,
    jobDescription,
    salary,
    deadline,
    responsibilities,
    joiningDate,
    skillsRequired,
    jobType,
    whoCanApply,
    howToApply,
  } = job;
  return (
    <div className="bg-blue-gray-50 p-4">
    
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-white w-11/12 lg:w-3/4 p-4 mx-auto">
        <h1 className="text-center font-semibold text-lg text-blue-800">
      Join as {jobTitle}
      </h1>
         <h1 className="text-medium text-gray-600 w-3/4 mx-auto mt-2 text-center mb-6">Are you interested in applying for the post as {jobTitle}? Have a look at the full job details to learn more and be a part of us!</h1>
         <div className="flex items-center lg:w-9/12 mx-auto gap-x-8 mb-3">
            <p>{`=>`}Job Type: {jobType}</p>
            <p>{`=>`}Salary: {salary}</p>
         </div>
         <div className="flex items-center lg:w-9/12 mx-auto gap-x-8 mb-3">
            <p>{`=>`}Deadline: {deadline}</p>
            <p>{`=>`}Joining Date: {joiningDate}</p>
         </div>
         <p className="lg:w-9/12 mx-auto mb-3">{`=>`}Educational Qualifications: {educationalRequirements}</p>  
        <h2 className="lg:w-9/12 mx-auto">{`=>`}Job Description:</h2>
        <p className="w-11/12 mx-auto mb-3"><small>{jobDescription}</small></p>
      <div className="lg:w-9/12 mx-auto mb-3">
      <h2 >{`=>`}Skills Required:</h2>
        <ul className="list-decimal">
            {
                skillsRequired.map((skill:any,i:number)=>
                    <li className="text-sm" key={i}>{skill}</li>
                    )
            }
        </ul>
      </div>
      <div className="lg:w-9/12 mx-auto mb-3">
      <h2 >{`=>`}Responsiblities:</h2>
        <ul className="list-disc">
            {
                responsibilities.map((responsiblity:any,i:number)=>
                    <li className="text-sm" key={i}>{responsiblity}</li>
                    )
            }
        </ul>
      </div>
      <p className="w-9/12 mx-auto mb-3">{`=>`}Who can apply: {whoCanApply}</p>
      <p className="w-9/12 mx-auto mb-3">{`=>`}How to apply: {howToApply}</p>
        </div>
        <UsefulLinksCard></UsefulLinksCard>
      </div>
    </div>
  );
};

export default SinleJobDetailPage;
