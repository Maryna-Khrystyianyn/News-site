import{ Route, Routes as Routers } from 'react-router-dom'; 
import NewsDetails from "../pages/NewsDetails.jsx";
import { AboutUsPage } from '../components/aboutUs/AboutUsPage.jsx';

const AppRoutes = () => {
  return (
    <>
      <Routers>
        <Route path="/" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path='/AboutUs' element={<AboutUsPage />} />
      </Routers>
    </>
  );
};

export default AppRoutes; 