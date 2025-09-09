import { useState, useEffect } from "react";
import NewsCardItem from "../../components/NewsCardItem";
import Navbar from "../../components/navbar/Navbar";
import NavList from "../../components/navList/NavList";
import Writer from "../../components/writer/Writer";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
import { Authors } from "../../data/Author";
import CategoryCarousel from "../../components/categoryCarousel/CategoryCarousel";
import CarouselNews from "../../components/carouselNews/CarouselNews";
import PopularPostCarousel from "../../components/popularPost/PopularPostCarousel";

/* const NewsLinks = [{
  item:"News",
  url:"/"
}] */

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const controller = new AbortController();
  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;

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
        setNews(newsWithId);
        console.log(news);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);
  const visibleItems = showAll ? news : news.slice(0, 6);

  return (
    <section>
      <Navbar />

      <CategoryCarousel />
      <CarouselNews />

      <Writer author={Authors[0]} />
<PopularPostCarousel popularNews={news}/>
      <div className="max-w-[1511px] flex justify-end mx-auto my-2">
        <button
          className="bg-gray-100 rounded-md px-4 py-2 cursor-pointer text-gray-700 hover:font-bold w-[120px]"
          onClick={() => setShowAll(true)}
        >
          {" "}
          {`Show All >`}
        </button>
      </div>
      <div className="w-[1511px] m-auto grid lg:grid-cols-2 gap-5 sm:grid-cols-1">
        {visibleItems.map((news) => {
          return <NewsCardItem key={news.id} newsItem={news} id={news.id} />;
        })}
      </div>
    </section>
  );
};

export default News;
