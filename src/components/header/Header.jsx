import NavList from "./NavList";
import { LeseZeichenIcon } from "../../assets/Image";
import Search from "./Search";
import User from "./User";
const Header = () => {
  const homeLink = [
    {
      id: 1,
      item: "Mega.news",
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
    <header>
      <NavList linkArray={homeLink} />
        <Search/>
        <User/>
      <LeseZeichenIcon />
    </header>
  );
};

export default Header;
