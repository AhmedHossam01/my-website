import * as React from "react";

const Info = () => {
  return (
    <div className="flex gap-4 justify-center flex-col lg:flex-row">
      <div className="text-5xl">👋</div>

      <div>
        <h1 className="text-5xl text-black font-bold dark:text-white">
          Hi, I'm Ahmed Hossam
        </h1>
        <p className="mt-8 text-slate-700 dark:text-slate-300">
          Welcome to my humble blog. Here I mostly blog about my projects, stuff
          I discover, books I read, or technical problems/issues I've solved.
          This was intented to be a portfolio, but I'm too excited to start
          blogging so I made the blog until the portfolio is complete.
        </p>

        <ul className="mt-4 flex gap-4 items-center">
          <li>
            <a
              href="https://www.twitter.com/devahmedhossam"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 text-white bg-blue-600 hover:bg-blue-800 transition px-2 py-1 rounded-md"
            >
              Follow me on Twitter
              <svg
                class="w-6 h-6 text-blue-100 fill-current transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ahmedhossam01/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="w-6 h-6 text-blue-500 fill-current hover:text-blue-700 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/AhmedHossam01"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="w-6 h-6 text-slate-300 fill-current hover:text-white transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
