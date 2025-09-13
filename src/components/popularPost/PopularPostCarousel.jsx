import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import NewsCardItem from "../news/NewsCardItem";
import Title from "../title/Title";
import "./popularPostCarousel.css";
const PopularPostCarousel = ({ popularNews }) => {
  return (
    <div className="max-w-[1511px] px-10 2xl:px-0 my-5 mx-auto bg-gray-50 p-2 rounded-2xl shadow-lg shadow-gray-100/50 relative">
      <div className="  rounded-xl">
        <div className="absolute top-3">
          <Title title={"Popular Post"} />
        </div>

        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          controller={true}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            460: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
            1600: { slidesPerView: 4 },
          }}
          modules={[Pagination, Navigation]}
          className={"myPostSwiper"}
        >
          {popularNews.map((newsItem) => {
            return (
              <SwiperSlide key={newsItem.id}>
                <div className=" pt-12">
                  <NewsCardItem
                    newsItem={newsItem}
                    id={newsItem.id}
                    isSmall={true}
                  />{" "}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularPostCarousel;
