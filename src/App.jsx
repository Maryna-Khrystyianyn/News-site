import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes";
import News from "./routes/news/News";
import { LeseZeichenIcon } from "./assets/Image";
import Navigator from "./components/header/Navigator";
import Writer from "./components/writer/Writer";
import { Footer } from "./components/footer/Footer";
import { CategorySlider} from "./components/sliders/CategorySlider/CategorySlider"
// import { AboutUsPage } from "./components/aboutUs/AboutUsPage";

function App() {
  return (
    <>
    <div>
      <CategorySlider/>
    </div>
    <div className="w-[1512px] m-auto">
      <Header />
      <Navigator />
      <Writer />
      <AppRoutes />
      <div className="absolute left-0 mt-60">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
