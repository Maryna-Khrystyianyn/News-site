import { Link } from "react-router-dom";

const NavList = ({ linkArray = [] }) => {
  return (
    <nav className="flex gap-6">
      {linkArray.map((link, index) => (
        <Link className={link.className} key={link.id ?? index} to={link.url}>
          {link.item}
        </Link>
      ))}
    </nav>
  );
};

export default NavList;
