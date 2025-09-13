import Navbar from "../../components/navbar/Navbar";
import NavList from "../../components/navList/NavList";
import Writer from "../../components/writer/Writer";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
import { Authors } from "../../data/Author";
import CategoryCarousel from "../../components/categoryCarousel/CategoryCarousel";
import News from "../../components/news/News";

const NewsPage = () => {
  const NewsLinks = [
    {
      item: "Home",
      url: "/",
    },
    {
      item: <span className="text-gray-500">{`> Mega News`}</span>,
      url: "/news",
    },
  ];

  return (
    <section>
      <Navbar />
      <NavList linkArr={NewsLinks} />
      <CategoryCarousel />

      <Writer author={Authors[0]} />

      <News />
    </section>
  );
};

export default NewsPage;
