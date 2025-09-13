import { useState, useEffect } from "react";
import useWindowDimensions from "../../assets/hooks/windowDimensions";


import { useNews } from "../../assets/fetch/FetchNews";
import NewsCardItem from "./NewsCardItem";

/* const NewsLinks = [{
  item:"News",
  url:"/"
}] */

const News = () => {
  const [showAll, setShowAll] = useState(false);
  const { width, height } = useWindowDimensions();
  const { news, loading } = useNews();

  const visibleItems = showAll ? news : news.slice(0, 6);
  const showSmall = width < 700 ? true : false;
  if (loading) return <p>Loading.....</p>;
  return (
    <section>
      <div className="max-w-[1511px] lg:px-50 xl:px-10 px-10 2xl:px-0 flex justify-end mx-auto my-2">
        <button
          className="bg-gray-100 rounded-md  py-2 cursor-pointer text-gray-700 hover:font-bold w-[120px]"
          onClick={() => setShowAll(true)}
        >
          {`Show All >`}
        </button>
      </div>
      <div className="max-w-[1511px] px-10 2xl:px-0 mx-auto grid  xl:grid-cols-2 gap-5 sm:grid-cols-1">
        {visibleItems.map((news) => {
          return (
            <div className="lg:px-40 xl:px-0">
              <NewsCardItem
                key={news.id}
                newsItem={news}
                id={news.id}
                isSmall={showSmall}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
