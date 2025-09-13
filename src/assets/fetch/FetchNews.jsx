import { useEffect, useState } from "react";

export const useNews = () => {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
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
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);
  return {news, loading}
};

/* const [showAll, setShowAll] = useState(false);
const { width, height } = useWindowDimensions(); */


