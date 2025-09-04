import AppRoutes from "./routes";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header"; 
// TODO: Falls unbenutzt, bitte löschen
import "./App.css"; 


export const App = () => {
  return (
    <div className="w-[1512px] m-auto">
      <Header />
      <AppRoutes />
      <div className="absolute left-0 mt-60">
        <Footer />
      </div>
    </div>
  );
}
