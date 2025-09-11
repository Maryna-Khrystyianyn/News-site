import NavList from "./NavList";
import { LeseZeichenIcon } from "../../assets/Image";
import Search from "./Search";
import User from "./User";

const Header = () => {
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
    <header className="flex h-12  justify-between sm:flex-col md:flex-col lg:flex-row lg:items-center xl:w-[80%]">
      <div>
        <NavList linkArray={homeLink} />
      </div>
      <div className="flex items-center sm:mt-4 lg:w-[40%] lg:mt-0 ">
        <div className="">
          <Search />
        </div>
        <div className="">
          <User />
        </div>
        <div className="flex h-12 w-12 justify-around items-center bg-gray-200 rounded-[12px] sm:ml-10 lg:ml-0 lg:w-20"> 
          <LeseZeichenIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
