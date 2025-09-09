import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import NewsCardItem from "../NewsCardItem";
import Title from "../title/Title";
import "./popularPostCarousel.css";
const PopularPostCarousel = ({ popularNews }) => {
  return (
    <div className="w-[1511px] my-5 mx-auto bg-gray-50 p-2 rounded-2xl shadow-lg shadow-gray-100/50 relative">
      <div className="  rounded-xl">
        <div className="absolute top-3">
          <Title title={"Popular Post"} />
        </div>

        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          controller={true}
          navigation={true}
          pagination={{
            type: "progressbar",
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
