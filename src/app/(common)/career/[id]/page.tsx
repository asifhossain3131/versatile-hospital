import { getSingleJobFromDb } from "@/services/career.service";

const SinleJobDetailPage =async ({params}:any) => {
   const job=await  getSingleJobFromDb(params.id)
    return (
        <div>
            single job
        </div>
    );
};

export default SinleJobDetailPage;