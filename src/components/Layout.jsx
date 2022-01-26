import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useLayoutEffect(() => {
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
      <div className="bg-white dark:bg-slate-900 dark:text-slate-100">
        <title>{pageTitle}</title>

        <Navbar setIsDark={setIsDark} isDark={isDark} />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </div>
    </div>
  );
};
export default Layout;
