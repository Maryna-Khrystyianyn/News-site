import NavList from "./NavList";
import { LeseZeichenIcon } from "../../assets/Image";
import Search from "./Search";
import User from "./User";

export const Header = () => {
  const homeLink = [
    {
      className: "text-[#fc4308] font-bold text-xl",
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
    <header className="flex h-12  justify-between items-center">
      <div>
        <NavList linkArray={homeLink} />
      </div>
      <div className="flex items-center">
        <div className="">
          <Search />
        </div>
        <div className="">
          <User />
        </div>
        <div className="flex h-12 w-12 justify-around items-center bg-gray-200 rounded-[12px]"> 
          <LeseZeichenIcon />
        </div>
      </div>
    </header>
  );
};
