import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from "../../assets/hooks/windowDimensions"

import CarouselNewsItem from "./CarouselNewsItem";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

import "swiper/css";
import "swiper/css/navigation";
import "./carouselNews.css"

const CarouselNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowDimensions();

  const controller = new AbortController();
  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        console.log(data);
        const list = Array.isArray(data.articles) ? data.articles : [];

        const newsWithId = list.map((listItem, i) => ({
          // randomUUID()
          ...listItem,
          id:
            typeof crypto !== "undefined" && crypto.randomUUID()
              ? crypto.randomUUID()
              : String(i),
        }));
        setNews(newsWithId.slice(0, 6));
        console.log(news);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const erstTwo = news.slice(0, 2);
  const lastNews = (width < 1024)? news.slice(0, 6):news.slice(2, 6);
  const lenghtforTwo=(width < 1280)?6:10
  
  return (
    <section className="my-10 px-10 2xl:px-0">
      <div className="max-w-[1511px] w-full mx-auto flex gap-5">
        <div className="hidden  w-[50%] h-[452px] lg:grid grid-cols-2 gap-5">
          {erstTwo.map((news) => {
            return (
              
              <CarouselNewsItem
                key={news.id}
                newsItem={news}
                
                textLength={lenghtforTwo}
              />
            );
          })}
        </div>

        <div className=" lg:w-[50%] w-[100%] mx-auto ">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {lastNews.map((news) => {
              return (
                <SwiperSlide key={news.id}>
                  <CarouselNewsItem newsItem={news}  textLength={30}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CarouselNews;
