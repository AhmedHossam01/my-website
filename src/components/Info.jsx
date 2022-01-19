import * as React from "react";

const Info = () => {
  return (
    <div className="flex gap-4 justify-center flex-col lg:flex-row">
      <div className="text-5xl">👋</div>

      <div>
        <h1 className="text-5xl text-black font-bold dark:text-white">
          Hi, I'm Ahmed Hossam
        </h1>
        <p className="mt-2 text-slate-700 dark:text-slate-300">
          Welcome to my humble blog. Here I mostly blog about my projects, stuff
          I discover, books I read, or technical problems/issues I've solved.
          This was intented to be a portfolio, but I'm too excited to start
          blogging so I made the blog until the portfolio is complete.
        </p>

        <ul className="mt-4 flex gap-4">
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <svg
                class="w-6 h-6 text-blue-300 fill-current hover:text-blue-700 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </li>

          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <svg
                class="w-6 h-6 text-blue-500 fill-current hover:text-blue-700 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
