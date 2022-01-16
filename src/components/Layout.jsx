import { Link } from "gatsby";
import * as React from "react";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
    </div>
  );
};
export default Layout;
