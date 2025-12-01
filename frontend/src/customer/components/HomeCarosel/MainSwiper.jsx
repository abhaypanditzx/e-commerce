
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay } from 'swiper/modules';
import { homeSwiperData } from './MainSwiperData';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// Import Swiper React components
// Import Swiper styles

// import required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  const MainSwiper =  () => {
  return (
<>
 <Swiper
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{delay:2500,disableOnInteraction:false,pauseOnMouseEnter:true}}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
{
  homeSwiperData.map((element,index)=> 
        <SwiperSlide key={index} ><img className='w-screen' src={element.image} alt="" /></SwiperSlide>
   
        
      )
}
      </Swiper>
    
  </>
  );

};
export default MainSwiper;