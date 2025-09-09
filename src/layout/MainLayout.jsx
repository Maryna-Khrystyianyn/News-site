import Header from "../components/header/Header.jsx";
import AppNavigator from "../components/app-navigator/AppNavigator.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <div className="w-[1512px] m-auto pt-5 flex flex-col">
        <Header />
        <AppNavigator />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="mt-30">
        <Footer />
      </div>
    </div>
  );
}
