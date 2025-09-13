import CarouselNews from "../../components/carouselNews/CarouselNews";
import CategoryCarousel from "../../components/categoryCarousel/CategoryCarousel";
import Navbar from "../../components/navbar/Navbar";
import PopularPostCarousel from "../../components/popularPost/PopularPostCarousel";
import { useNews } from "../../assets/fetch/FetchNews";
import News from "../../components/news/News";
import LatestVideo from "../../components/latestVideo/LatestVideo";
const Home = () => {
  const { news, loading } = useNews();
  return (
    <div>
      <Navbar />
      <CategoryCarousel />
      <CarouselNews />
      <PopularPostCarousel popularNews={news} />
      <News />
      <LatestVideo />
    </div>
  );
};

export default Home;
