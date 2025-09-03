import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes";
import News from "./routes/news/News";
import { LeseZeichenIcon } from "./assets/Image";
import Navigator from "./components/header/Navigator";
import Writer from "./components/writer/Writer";
import { Footer } from "./components/footer/Footer";
import { AboutUsPage } from "./components/aboutUs/AboutUsPage";
import { MapSection } from "./components/aboutUs/MapSection";
import { TeamSection } from "./components/aboutUs/TeamSection";
import { VideoSection } from "./components/aboutUs/VideoSection";   

function App() {
  return (

    // <div className="w-[1512px] m-auto">
    //   <Header />
    //   <Navigator />
    //   <Writer />
    //   <AppRoutes />
    //   <div className="absolute left-0 mt-60">
    //     <Footer />
    //   </div>
    // </div>
      <>
      <div className="w-[1512px] m-auto pt-5">
          <Header />
          <Navigator />
          <section>
            <VideoSection />
          </section>
          <section className="absolute left-0">
            {" "}
            <MapSection />{" "}
          </section>
          <section>
            <TeamSection />
          </section>
          <div className="absolute left-0 mt-30">
            <Footer />
          </div>
          </div>
        </>
  );
}

export default App;
