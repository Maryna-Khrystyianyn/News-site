import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { categories } from "../../assets/categories";
import { CategoryPill } from "./Category";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./category.css";

const CategoryCarousel = () => {
  return (
    <div className=" w-[1511px] my-5 mx-auto bg-gray-100 rounded-xl p-3">
      <Swiper
        spaceBetween={5}
        slidesPerView={8}
        controller={true}
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
