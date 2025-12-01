import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
// import  dressData  from '../../../api/Fetch';
function HomeSectionCard() {
  return (
    <div >
<div className='bg-white mt-5 p-5'>
          <h2 className='text-2xl font-bold text-start p-4 capitalize'>TRENDING</h2>
{
   <Swiper
        modules={[Virtual, Navigation, Pagination]}
       
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={1}
        navigation={true}
        virtual
      >
        {/* {dressData.map((product, idx) => (
          <SwiperSlide key={idx} virtualIndex={idx}>
            <ProductCard product={product}/>
          </SwiperSlide>
        ))
        } */}
      </Swiper>
}
</div>
        
   
    </div>
  );
}



export default HomeSectionCard
