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
      className="w-full max-w-[1512px] mx-auto">
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

// import { useEffect, useState } from "react";
// import { createClient } from "pexels";
// import NewsCardItem from "../../NewsCardItem";

// const API_KEY_Photo = import.meta.env.VITE_PHOTO_API_KEY;
// const client = createClient(API_KEY_Photo);

// // All requests made with the client will be authenticated

// export const NewsSlider = () => {
//   const [photos, setPhoto] = useState([]);

//   useEffect(() => {
//     client.photos.curated({ per_page: 3 }).then((result) => {
//       setPhoto(result.photos); // result contains { page, per_page, photos }
//     });
//   }, []);

//   return (
//     <section className="">
//       <div className="absolute flex w-[1512px] z-10  gap-[24px]">
//         {photos.map((c, index) => (
//           <div key={c.id}>
//             <img
//               className={`h-[452px] object-cover  rounded-[12px] ${
//                 index === photos.length - 1 ? "w-[744px]" : "w-[360px]"
//               }`}
//               src={c.src.large}
//               alt={c.alt}
//             />

//             <div
//               className={`blur- flex flex-col justify-evenly left-1/2 -translate-x-1/2 relative
//                ${index === photos.length - 1 ? "w-full" : "w-[339px]"}
//                h-[117px] bottom-32 bg-gray-100 opacity-70 rounded-[12px]`}
//             >
//               <h2 className="font-bold ml-5 text-[25px]">This is my Title</h2>
//               <p className="ml-5 text-[14px]">
//                 This are my News and we want sunshine and happiness
//               </p>
//             </div>

//             {/* <div className="blur- flex flex-col justify-evenly left-1/2 -translate-x-1/2 relative w-[339px] h-[117px] bottom-32 bg-gray-100 opacity-70 rounded-[12px]">
//               <h2 className="font-bold ml-5 text-[25px]">This is my Title</h2>
//               <p className="ml-5 text-[14px]">
//                 This are my News and we want sunshine and happiness
//               </p>
//             </div> */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
