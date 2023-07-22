import LatestNews from '@/app/components/LatestNews';
import PrimaryBanner from '@/app/components/PrimaryBanner';
import getSingleDiagnosticByDiagnosticName from '@/utils/getSingleDiagnosticByDiagnosticName';
import Image from 'next/image';
import React from 'react';

const SignleDiagnosticPage = async({params}:any) => {
    const decodedUrl=decodeURIComponent(params.diagnostic)
    const service=await getSingleDiagnosticByDiagnosticName(decodedUrl)
    return (
        <>
            <PrimaryBanner title={decodedUrl}></PrimaryBanner>
            <div className="bg-blue-gray-50 p-4 flex flex-col lg:flex-row gap-2">
     <div className='w-11/12 lg:w-3/4 mx-6 lg:mx-12'>
   df
     </div>
     <div className='mx-6'>
    <LatestNews></LatestNews>
     </div>
      </div>
        </>
    );
};

export default SignleDiagnosticPage;