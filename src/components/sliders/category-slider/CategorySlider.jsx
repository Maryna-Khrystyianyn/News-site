import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Modul importieren
import "swiper/css";
import "swiper/css/navigation";
import { categories } from "../../../Data/categoryData";
import { CategoryPill } from "./CategoryPill";
import "./category-slider.css";

// https://swiperjs.com/demos#responsive-breakpoints
export const CategorySlider = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={8}
      navigation={true}
      modules={[Navigation]}
      className="bg-gray-200 rounded-[12px] w-[80%] h-[68px] m-auto mt-[20px] mb-[30px] flex items-center justify-around category-slider-container"
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1650: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
      }}
    >
      {categories.map((categories, i) => (
        <SwiperSlide key={i} className="swiper_item">
          <CategoryPill
            label={categories.category}
            imageUrl={categories.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
