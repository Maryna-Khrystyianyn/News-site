import { Link } from "react-router-dom";
import Search from "../search/Search";
import User from "../user/User";
import { DownArrow, FlagIcon } from "../../assets/AllImages";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center gap-10 ">
        <Link className="text-red-500 font-bold text-2xl" to="/">
          Mega.News
        </Link>
        <Link className="flex items-center" to="/categories">Categories <DownArrow/></Link>
        <Link className="flex items-center"   to="/pages">Pages <DownArrow/></Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </div>

      
 <div className="flex items-center gap-3 ">
        <Search />
        <User />
        <div className="bg-gray-100 rounded-b-md p-3">
        <FlagIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;