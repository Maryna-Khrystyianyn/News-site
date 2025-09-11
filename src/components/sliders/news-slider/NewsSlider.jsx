import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const NewsSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error loading articles:", err));
  }, []);

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView="auto" // <— WICHTIG: unterschiedliche Breiten erlauben
      navigation={true}
      modules={[Navigation]}
      className="w-full mx-auto">
      {articles.map((a, index) => {
        const isLast = index === articles.length - 1;
        return (
          <SwiperSlide
            key={a.id}
            className={isLast ? "!w-[744px]" : "!w-[360px]"} // <— feste Slide-Breite
          >
            <article className="relative h-[452px] rounded-[12px] overflow-hidden">
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className={`absolute bottom-3 h-[117px] rounded-[12px] bg-white/70 backdrop-blur p-4
                   ${
                     isLast
                       ? "left-6 right-6"
                       : "left-1/2 -translate-x-1/2 w-[339px]"
                   }`}>
                <h2 className="font-bold text-[25px] leading-snug">
                  {a.title}
                </h2>
                <p className="text-[14px] mt-3">{a.excerpt}</p>
              </div>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
