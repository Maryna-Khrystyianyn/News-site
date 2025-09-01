
import { Link, useLocation } from "react-router-dom";

const Navigator = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 my-4">
      <Link to="/" className="font-bold ">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        return (
          <span key={routeTo}>
            {" > "}
            {isLast ? (
              <span className="font-semibold">{name}</span>
            ) : (
              <Link to={routeTo}>
                {name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Navigator;
