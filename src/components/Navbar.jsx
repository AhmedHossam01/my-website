import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "React";

const Navbar = ({ setIsDark, isDark }) => {
  const setDark = () => {
    setIsDark(true);
    localStorage.setItem("theme", "dark");
  };

  const setLight = () => {
    setIsDark(false);
    localStorage.setItem("theme", "light");
  };

  return (
    <header className=" text-gray-400 body-font bg-white shadow-md dark:bg-slate-800 dark:text-gray-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 dark:text-slate-100 mb-4 md:mb-0"
        >
          <StaticImage
            className="w-10 h-10 rounded-full"
            src="../images/logo.png"
            alt="site logo"
          />
          <span className="ml-3 text-xl">Ahmed</span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link
            className="mr-5 text-black hover:text-gray-900 dark:text-white"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mr-5 hover:text-gray-900 dark:hover:text-white"
            to="/"
          >
            Mailing List
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 dark:bg-slate-700 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2 text-red-500"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          <a
            href="https://www.youtube.com/channel/UCjRVMR_XHu0vKK5rXzdS-UQ/channels"
            target="_blank"
          >
            My YouTube Subscriptions
          </a>
        </button>

        <button className="ml-4" onClick={isDark ? setLight : setDark}>
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
