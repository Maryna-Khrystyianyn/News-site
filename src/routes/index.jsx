import{ Route, Routes as Routers } from 'react-router-dom'; // Importiere notwendige Komponenten von react-router-dom
import News from './news/News';
import NewsDetails from './NewsDetails';
import Categories from './categories.jsx/Categories';
import AboutUs from './aboutsUs/AboutUS';
import Pages from './pages/Pages';
import ContactUs from './contactUs/ContactUs';

const AppRoutes = () => {
  return (
    <>
      <Routers>
        <Route path="/" element={<News />} />
        <Route path="/:id" element={<NewsDetails />} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routers>
    </>
  );
};

export default AppRoutes; // Exportiert die Komponente
