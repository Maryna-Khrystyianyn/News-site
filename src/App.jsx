import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes";
import News from "./routes/news/News";
import { LeseZeichenIcon } from "./assets/Image";
import Navigator from "./components/header/Navigator";
import Writer from "./components/writer/Writer";

function App() {

  return (
    <div className="w-[1512px] m-auto">
      <Header />
      <Navigator/>
      <Writer/>
      <AppRoutes />
    </div>
  );
}

export default App;
