import { Link, useLocation } from "react-router-dom";

// "Navigator" ist eine in React implementierte Variable und darf nicht verwendet werden.
// Ich habe daher den Namen des Components geändert.

const AppNavigator = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      aria-label="Breadcrumbs"
      className="text-sm text-gray-600 my-4 mb-10 mt-10"
    >
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
              <Link to={routeTo}>{name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default AppNavigator;