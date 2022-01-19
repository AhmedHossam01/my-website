import * as React from "react";
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  return (
    <div className={isDark && "dark"}>
      <div className="bg-white dark:bg-slate-900">
        <title>{pageTitle}</title>

        <Navbar setIsDark={setIsDark} isDark={isDark} />

        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
