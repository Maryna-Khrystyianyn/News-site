import NavList from "./NavList";
import { LeseZeichenIcon } from "../../assets/Image";
import Search from "./Search";
import User from "./User";

const Header = () => {
  const homeLink = [
    {
      className: "text-red-500",
      id: 1,
      item: "MEGA.news",
      url: "/",
    },
    {
      id: 2,
      item: "Categories",
      url: "/Categories",
    },
    {
      id: 3,
      item: "Pages",
      url: "/Pages",
    },
    {
      id: 4,
      item: "Contact Us",
      url: "/ContactUs",
    },
    {
      id: 5,
      item: "About Us",
      url: "/AboutUs",
    },
  ];
  return (
    <header className="flex">
      <div>
        <NavList linkArray={homeLink}  className="text-red-500"/>
      </div>
        <Search/>
        <User/>
      <LeseZeichenIcon />
    </header>
  );
};

export default Header;
