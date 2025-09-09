import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import News from "./pages/news/News.jsx";
import NewsDetails from "./pages/news/NewsDetails.jsx";
import { AboutUs } from "./pages/about-us/AboutUs.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<News />} />
        <Route path="/:id" element={<NewsDetails />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

// import "./App.css";
// import Header from "./components/header/Header.jsx";
// import AppRoutes from "./routes/Index.jsx";
// import News from "./routes/news/News.jsx";
// import { LeseZeichenIcon } from "./assets/Image.jsx";
// import Navigator from "./components/header/Navigator.jsx";
// import Writer from "./components/writer/Writer.jsx";
// import { Footer } from "./Footer.jsx"
// import { AboutUsPage } from "./components/aboutUs/AboutUsPage.jsx";
// import { MapSection } from "./components/aboutUs/MapSection.jsx";
// import { TeamSection } from "./components/aboutUs/TeamSection.jsx";
// import { VideoSection } from "./components/aboutUs/VideoSection.jsx";

// function App() {
//   return (

//     // <div className="w-[1512px] m-auto">
//     //   <Header />
//     //   <Navigator />
//     //   <Writer />
//     //   <AppRoutes />
//     //   <div className="absolute left-0 mt-60">
//     //     <Footer />
//     //   </div>
//     // </div>
//       <>
//       <div className="w-[1512px] m-auto pt-5">
//           <Header />
//           <Navigator />
//           <section>
//             <VideoSection />
//           </section>
//           <section className="absolute left-0">
//             {" "}
//             <MapSection />{" "}
//           </section>
//           <section>
//             <TeamSection />
//           </section>
//           <div className="absolute left-0 mt-30">
//             <Footer />
//           </div>
//           </div>
//         </>
//   );
// }

// export default App;
