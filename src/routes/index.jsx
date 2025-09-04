import{ Route, Routes as Routers } from 'react-router-dom'; // Importiere notwendige Komponenten von react-router-dom
import News from './news/News';
import NewsDetails from './news-details/NewsDetails';
import { AboutUs } from './about-us/AboutUs';

const AppRoutes = () => {
  return (
    <>
      <Routers>
        <Route path="/" element={<News />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/:id" element={<NewsDetails />} />
      </Routers>
    </>
  );
};

export default AppRoutes; // Exportiert die Komponente
