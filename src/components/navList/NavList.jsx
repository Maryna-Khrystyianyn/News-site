import { Link } from "react-router-dom";

const NavList = ({ linkArr }) => {
  return (
    <div className="flex items-center gap-2">
      {linkArr.map((link) => {
        return <Link to={link.url}>{link.item}</Link>;
      })}
    </div>
  );
};

export default NavList;
