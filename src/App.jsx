import "./App.css";
import Header from "./components/header/Header";
import AppRoutes from "./routes";
import News from "./routes/news/News";
import { LeseZeichenIcon } from "./assets/Image";
import Navigator from "./components/header/Navigator";

function App() {

  return (
    <>
      <Header />
      <Navigator/>
      <AppRoutes />
    </>
  );
}

export default App;
