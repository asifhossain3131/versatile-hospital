import React from 'react';
import HomeCarousel from '../components/home components/HomeCarousel';
import HomeGallery from '../components/home components/HomeGallery';
import HomeBlogs from '../components/home components/HomeBlogs';
import HomeContact from '../components/home components/HomeContact';
import HomeSolution from '../components/home components/HomeSolution';
import HomeSpecialiaty from '../components/home components/HomeSpecialiaty';
import HomeSpecialDoctors from '../components/home components/HomeSpecialDoctors';

const page = () => {
  return (
    <div className='space-y-8'>
     <HomeCarousel></HomeCarousel>
     <HomeGallery></HomeGallery>
     <HomeSpecialDoctors></HomeSpecialDoctors>
     <HomeSpecialiaty></HomeSpecialiaty>
     {/* <HomeSolution></HomeSolution> */}
     <HomeBlogs></HomeBlogs>
     <HomeContact></HomeContact>  
    </div>
  );
};

export default page;