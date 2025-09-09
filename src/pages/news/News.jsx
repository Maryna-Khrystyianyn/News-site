import { useState, useEffect } from "react";
import NewsCardItem from "../../components/news-card-item/NewsCardItem";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

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
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);
  return (
    <section>
      <div className="w-[1512px] m-auto grid lg:grid-cols-2 gap-5 sm:grid-cols-1">
        {news.map((news, i) => {
          return <NewsCardItem key={news.id} newsItem={news} id={news.id} />;
        })}
      </div>
    </section>
  );
};

export default News;
