import{ Route, Routes as Routers } from 'react-router-dom'; // Importiere notwendige Komponenten von react-router-dom

import NewsDetails from './NewsDetails';
import Categories from './categories.jsx/Categories';
import AboutUs from './aboutsUs/AboutUS';
import Pages from './pages/Pages';
import ContactUs from './contactUs/ContactUs';
import Home from './home/Home';
import NewsPage from './news/NewsPage';

const AppRoutes = () => {
  return (
    <>
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routers>
    </>
  );
};

export default AppRoutes; // Exportiert die Komponente
