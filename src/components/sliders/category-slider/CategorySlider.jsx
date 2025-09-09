import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Modul importieren
import "swiper/css";
import "swiper/css/navigation";
import { categories } from "../../../Data/categoryData";
import { CategoryPill } from "./CategoryPill";

export const CategorySlider = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={8}
      navigation={true}
      modules={[Navigation]}
      className="bg-gray-200 rounded-[12px] w-[1512px] h-[68px] m-auto mt-[20px] mb-[30px] flex items-center justify-around"
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
