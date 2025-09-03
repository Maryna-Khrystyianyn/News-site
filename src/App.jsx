import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes";
import News from "./routes/news/News";
import { LeseZeichenIcon } from "./assets/Image";
import Navigator from "./components/header/Navigator";
import Writer from "./components/writer/Writer";
import { Footer } from "./components/footer/Footer";
import { AboutUsPage } from "./components/aboutUs/AboutUsPage";

function App() {
  return (
    <div className="w-[1512px] m-auto">
      <Header />
      <AboutUsPage/>
      <Navigator />
      <Writer />
      <AppRoutes />
      <div className="absolute left-0 mt-60">
        <Footer />
      </div>
    </div>
  );
}

export default App;
