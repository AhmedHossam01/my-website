import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const PortfolioCard = () => {
  return (
    <section className="body-font text-gray-400 bg-indigo-900">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <StaticImage
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="../images/bug-tracker-screenshot.png"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
            Bug Tracker
          </h3>
          <p className="leading-relaxed">
            User friendly bug tracker with restful API and JWT authentication.
            Can be used by developers and clients to track bugs and issues. It
            has some awesome featurs like drag and drop for kanbaan board
            management, implemented using React beautiful dnd.
          </p>

          <div className="mt-2 flex gap-2 flex-wrap justify-center text-white">
            <span className="bg-gray-500 px-3 rounded-xl">React</span>
            <span className="bg-green-500 px-3 rounded-xl">
              Redux (toolkit)
            </span>
            <span className="bg-yellow-500 px-3 rounded-xl text-black">
              Typescript
            </span>
            <span className="bg-blue-500 px-3 rounded-xl">Unit Testing</span>
            <span className="bg-indigo-500 px-3 rounded-xl">
              JWT Authentication
            </span>
          </div>

          <div className="flex justify-center mt-8">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a
                href="https://bug-tracker-01.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo
              </a>
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <a
                href="https://github.com/AhmedHossam01/bug-tracker-client"
                target="_blank"
                rel="noreferrer noopener"
                className="w-full h-full flex gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;
