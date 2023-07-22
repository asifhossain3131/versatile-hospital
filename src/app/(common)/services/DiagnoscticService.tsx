import SectionTitle from '@/app/components/section title/SectionTitle';
import getDiagnosticNames from '@/utils/getDiagnosticNames';
import Link from 'next/link';
import React from 'react';

const DiagnoscticService = async() => {
    const  allDiagnostics=await getDiagnosticNames()
    return (
        <>
                 <SectionTitle
        title="diagnostic services"
        subtitle="Versatile offers vast facilities and ensures every services carefully"
      ></SectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-6 lg:mx-12">
        {
          allDiagnostics?.sort().map((diagnostic:string,id:number)=>
        <Link key={id} href={`/services/diagnostic/${diagnostic}`}>
        <div className="bg-blue-400 p-4 h-[70px] flex items-center text-gray-800 font-semibold rounded">
           <h1>{diagnostic}</h1>
        </div>
        </Link>
          )
        }
      </div>
        </>
    );
};

export default DiagnoscticService;