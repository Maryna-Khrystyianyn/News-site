import { Link } from "react-router-dom";
import Search from "../search/Search";
import User from "../user/User";
import { DownArrow, FlagIcon } from "../../assets/AllImages";

const Navbar = () => {
  return (
    <div className="px-10 lg:px-0">
<div className="flex justify-between items-center max-w-[1511px] mx-auto my-5">
      <div className="hidden lg:flex items-center xl:gap-10 gap-5">
        <Link className="text-red-500 font-bold text-2xl" to="/">
          Mega.News
        </Link>
        <Link className="flex items-center" to="/categories">
          Categories <DownArrow />
        </Link>
        <Link className="flex items-center" to="/pages">
          Pages <DownArrow />
        </Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </div>

      <div className="lg:hidden text-red-600">menu</div>

      <div className="flex justify-end items-center w-[50%] gap-3 ">
        <div className="hidden md:block">
          {" "}
          <Search />{" "}
        </div>
        <User />
        <div className="bg-gray-100 rounded-b-md p-3">
          <FlagIcon />
        </div>
      </div>
    </div>

<div className="md:hidden">
  <Search/>
</div>
    </div>
    
  );
};

export default Navbar;
