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
import BigVideoItem from "./BigVideoItem";

const LatestVideo = () => {
  return (
    /* Haupt Contauner */
    <div className="w-full bg-gray-100 my-10 pb-10 pt-5">
      <div className="max-w-[1512px] px-10 2xl:px-0 mx-auto relative ">
        
        <div className="absolute top-1">
          <Title title={"Latest Videos "} />
        </div>
        {/* Vide + Carousel*/}
        <div className="hidden md:grid grid-cols-1 xl:grid-cols-2  gap-5">
        <BigVideoItem  videoItem={videoList[0]}/>
          {/*Carousel*/}
          <div className="shadow-[inset_-10px_0_10px_0_theme(colors.gray.100)]">
            <Swiper
              slidesPerView={1.2}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={0}
              controller={true}
              navigation={true}
              breakpoints={{
                640: {slidesPerView: 1.2,},
                768: {slidesPerView: 1.3,},
                860: {slidesPerView: 1.5,},
                1100: {slidesPerView: 2,},
                1280: {slidesPerView: 1.2,},
              }}
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
{/* small screen */}
<div className="md:hidden">
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {videoList.map((videoItem) => {
              return (
                <SwiperSlide key={videoItem.id}>
                  <BigVideoItem videoItem={videoItem}/>
                </SwiperSlide>
              );
            })}
          </Swiper>

</div>

      </div>
    </div>
  );
};

export default LatestVideo;
