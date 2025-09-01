import { Link } from "react-router-dom";

const NavList = ({ linkArr }) => {
  return (
    <div className="flex items-center gap-2">
      {linkArr.map((link, i) => {
        const isLast = i === linkArr.length - 1;

        return isLast ? (
          <p key={i}>{link.item}</p>
        ) : (
          <Link key={i} to={link.url}>
            {link.item}
          </Link>
        );
      })}
    </div>
  );
};

export default NavList;
