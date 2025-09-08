import { useEffect, useState } from "react";
import { createClient } from "pexels";
import NewsCardItem from "../../NewsCardItem"; 

const API_KEY_Photo = import.meta.env.VITE_PHOTO_API_KEY;
const client = createClient(API_KEY_Photo);

// All requests made with the client will be authenticated

export const NewsSlider = () => {
  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    client.photos.curated({ per_page: 3 }).then((result) => {
      setPhoto(result.photos); // result contains { page, per_page, photos }
    });
  }, []);

  return (
     <section className="">
      <div className="absolute flex w-[1512px] z-10  gap-[24px]">
        {photos.map((c, index) => (
          <div key={c.id}>
            <img
              className={`h-[452px] object-cover  rounded-[12px] ${
                index === photos.length - 1 ? "w-[744px]" : "w-[360px]"
              }`}
              src={c.src.large}
              alt={c.alt}
            />
           <div className="blur- flex flex-col justify-evenly left-1/2 -translate-x-1/2 relative w-[339px] h-[117px] bottom-32 bg-gray-100 opacity-70 rounded-[12px]">
            <h2 className="font-bold ml-5 text-[25px]">This is my Title</h2>
            <p className="ml-5 text-[14px]">This are my News and we want sunshine and happiness</p>
           </div>
          </div>
        ))}
      </div>
    </section>
  );
};
