import LatestNews from '@/app/components/LatestNews';
import PrimaryBanner from '@/app/components/PrimaryBanner';
import getSingleServiceByServiceName from '@/utils/getSingleServiceByServiceName';
import Image from 'next/image';
export const revalidate=0

const SingleServicePage = async({params}:any) => {
    const decodedUrl=decodeURIComponent(params.service)
     const service=await getSingleServiceByServiceName(decodedUrl)
     const{serviceName,img,description,servicesAndFacilities}=service
    return (
        <>
            <PrimaryBanner title={service.serviceName}></PrimaryBanner>
            <div className="bg-blue-gray-50 p-4 flex flex-col lg:flex-row gap-2">
     <div className='w-11/12 lg:w-3/4 mx-6 lg:mx-12'>
        <Image alt='service' src={img} width={600} height={300}></Image>
       <div className='w-full'>
       <h1 className='text-blue-800 p-3 font-semibold lg:text-2xl'>Why important?</h1>
        <p className='text-sm'>{description}</p>
       </div>
       <h1 className='text-blue-800 p-3 font-semibold lg:text-2xl'>What our {serviceName} facilates</h1>
       <ul className='list-disc lg:w-3/4'>
        {
            servicesAndFacilities.map((facility:string,i:number)=>
            <li key={i}>{facility}</li>
            )
        }
       </ul>
     </div>
     <div className='mx-6'>
    <LatestNews></LatestNews>
     </div>
      </div>
        </>
    );
};

export default SingleServicePage;