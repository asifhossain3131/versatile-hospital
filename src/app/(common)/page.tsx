import React from 'react';
import HomeCarousel from '../components/home components/HomeCarousel';
import HomeGallery from '../components/home components/HomeGallery';
import HomeBlogs from '../components/home components/HomeBlogs';

const page = () => {
  return (
    <div>
     <HomeCarousel></HomeCarousel>
     <HomeGallery></HomeGallery>
     <HomeBlogs></HomeBlogs>
    </div>
  );
};

export default page;