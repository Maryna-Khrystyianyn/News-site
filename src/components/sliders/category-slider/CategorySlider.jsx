import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Modul importieren
import "swiper/css";
import "swiper/css/navigation";
import { categories } from "../../../Data/categoryData";
import { CategoryPill } from "./CategoryPill";
import "./category-slider.css";

export const CategorySlider = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={8}
      navigation={true}
      modules={[Navigation]}
      className="bg-gray-200 rounded-[12px] w-[1512px] h-[68px] m-auto mt-[20px] mb-[30px] flex items-center justify-around category-slider-container"
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}>
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
