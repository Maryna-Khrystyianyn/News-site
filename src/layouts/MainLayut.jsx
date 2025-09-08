import Header from "../components/header/Header.jsx";
import Navigator from "../components/header/Navigator.jsx";
import Writer from "../components/writer/Writer.jsx";
import { Footer } from "../Footer.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-[1512px] m-auto pt-5 min-h-screen flex flex-col">
      <Header />
      <Navigator />
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="mt-30">
        <Footer />
      </div>
    </div>
  );
}
