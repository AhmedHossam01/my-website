import { Link } from "gatsby";
import * as React from "react";

const NavbarLink = ({ children, to, ...rest }) => {
  return (
    <Link
      className="mr-5 hover:text-gray-900 dark:hover:text-white"
      to={to}
      activeClassName="text-black hover:text-gray-900 dark:text-white"
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
