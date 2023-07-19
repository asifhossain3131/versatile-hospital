import PrimaryBanner from "@/app/components/PrimaryBanner";
import React from "react";
import HospitalService from "./HospitalService";

const ServicesPage = async () => {
  return (
    <>
      <PrimaryBanner title="find your service"></PrimaryBanner>
      <div className="bg-blue-gray-50 p-4">
        <HospitalService></HospitalService>
      </div>
    </>
  );
};

export default ServicesPage;
