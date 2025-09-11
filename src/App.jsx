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
