import "./index.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes";
// import News from "./routes/news/News";
// import { LeseZeichenIcon } from "./assets/Image";
import Navigator from "./components/header/Navigator";
import Writer from "./components/writer/Writer";
import { Footer } from "./components/footer/Footer";
import { CategorySlider } from "./components/sliders/CategorySlider/CategorySlider";
import { NewsSlider } from "./components/sliders/newsSlider/NewsSlider";
// import { AboutUsPage } from "./components/aboutUs/AboutUsPage";

export default function App() {
  return (
    <>
      <div className="w-[1512px] m-auto">
        <Header />
        <Navigator />
        <CategorySlider />
        <NewsSlider />
        <div className="mt-130">
          <Writer />
        </div>
        <AppRoutes />
        <div className="absolute left-0 mt-60">
          <Footer />
        </div>
      </div>
    </>
  );
}
