import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes";
import News from "./routes/news/News";
import { LeseZeichenIcon } from "./assets/Image";
import Navigator from "./components/header/Navigator";
import Writer from "./components/writer/Writer";

function App() {

  return (
    <>
      <Header />
      <Navigator/>
      <Writer/>
      <AppRoutes />
    </>
  );
}

export default App;
