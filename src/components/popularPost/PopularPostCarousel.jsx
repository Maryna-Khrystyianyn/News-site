import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import NewsCardItem from "../NewsCardItem";

const PopularPostCarousel = ({ popularNews }) => {
  return (
    <div className="w-[1511px] my-5 mx-auto">
      <div className="  rounded-xl">
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          controller={true}
          navigation={true}
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination, Navigation]}
          className={"categoriesList"}
        >
          {popularNews.map((newsItem) => {
            return (
              <SwiperSlide key={newsItem.id}>
               <NewsCardItem newsItem={newsItem} id={newsItem.id} isSmall={true}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularPostCarousel;
