import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

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
      <div className="text-center container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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

          <a
            className="mr-5 hover:text-gray-900 dark:hover:text-white flex gap-2 group"
            href="/youtube"
          >
            Recommended Youtube Channels
          </a>

          <Link
            className="mr-5 hover:text-gray-900 dark:hover:text-white"
            to="/blog"
          >
            My Blog
          </Link>
        </nav>
        <a
          href="https://www.linkedin.com/in/ahmedhossam01/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-sky-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-sky-700 transition-colors rounded text-base mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current mr-2 w-5 h-5"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          Connect on LinkedIn
        </a>

        <button
          className="mt-4 md:mt-0 md:ml-4"
          onClick={isDark ? setLight : setDark}
        >
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
