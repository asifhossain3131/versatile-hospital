import PrimaryBanner from "@/app/components/PrimaryBanner";
import React from "react";
import HospitalService from "./HospitalService";
import DiagnoscticService from "./DiagnoscticService";

const ServicesPage = async () => {
  return (
    <>
      <PrimaryBanner title="find your service"></PrimaryBanner>
      <div className="bg-blue-gray-50 p-4">
        <HospitalService></HospitalService>
        <DiagnoscticService></DiagnoscticService>
      </div>
    </>
  );
};

export default ServicesPage;
