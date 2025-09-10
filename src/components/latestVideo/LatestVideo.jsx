import Title from "../title/Title";
import { videoList } from "../../assets/videoList";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./videoCarousel.css"

// import required modules
import { Grid, Pagination,Navigation } from "swiper/modules";
import VideoItem from "./VideoItem";

const LatestVideo = () => {
  return (
    /* Haupt Contauner */
    <div className="w-full bg-gray-100 my-10 pb-10 pt-5">
      <div className="w-[1512px] mx-auto relative ">
        
        <div className="absolute top-1">
          <Title title={"Latest Videos "} />
        </div>
        {/* Vide + Carousel*/}
        <div className="grid grid-cols-2 gap-5">
          <div className="relative w-full overflow-hidden pt-12 h-[510px] flex items-end">
            <div className="w-full h-full ">
              <iframe
                width="100%"
                height="100%"
                src={videoList[0].videoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="rounded-xl"
              ></iframe>
            </div>

            <div className="bg-white opacity-90 absolute bottom-[10px]  left-[10px] w-[calc(100%_-_20px)] rounded-xl p-3">
              <h2 className="font-bold text-xl">{videoList[0].title}</h2>
              <h2>{videoList[0].description}</h2>
            </div>
          </div>
          {/*Carousel*/}
          <div className="shadow-[inset_-10px_0_10px_0_theme(colors.gray.100)]">
            <Swiper
              slidesPerView={1.4}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={0}
              controller={true}
              navigation={true}
             
              modules={[Grid, Pagination,Navigation]}
              className="myVideoSwiper"
            >
              {videoList.map((videoItem) => {
                return (
                  <SwiperSlide key={videoItem.id}>
                    <VideoItem video={videoItem} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVideo;
