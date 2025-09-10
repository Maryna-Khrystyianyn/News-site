import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { categories } from "../../assets/categories";
import { CategoryPill } from "./Category";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./category.css";

const CategoryCarousel = () => {
  return (
    <div className="hidden md:block 2xl:px-0 px-10 max-w-[1511px] my-5 mx-auto bg-gray-100 rounded-xl p-3">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          460: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 7,
          },
          1600: {
            slidesPerView: 8,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={"categoriesList"}
      >
        {categories.map((category, i) => {
          return (
            <SwiperSlide key={i}>
              <CategoryPill
                label={category.category}
                imageUrl={category.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;
