import { Link } from "react-router-dom";

const NavList = ({ linkArray = [] }) => {
  return (
    <nav>
      {linkArray.map((link, index) => (
        <Link key={link.id ?? index} to={link.url}>
          {link.item}
        </Link>
      ))}
    </nav>
  );
};

export default NavList;