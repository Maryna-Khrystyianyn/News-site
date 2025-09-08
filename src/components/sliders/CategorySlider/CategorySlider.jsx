import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";       // Modul importieren
import "swiper/css";
import "swiper/css/navigation";
import { categories } from "../../../Data/categoryData";

export const CategorySlider = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={8}
      navigation={true}
      modules={[Navigation]}
      className="bg-colour"
    >
      {categories.map((category, i) => (
        <SwiperSlide key={i} className="swiper_item">
          <button>
            <img src={category.image} alt={category.category} />
            {category.category}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};