import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const PortfolioCard = () => {
  <div className="relative text-white">
    <StaticImage
      className="object-cover rounded bg-indigo-100"
      alt="hero"
      src="../images/bug-tracker-screenshot.png"
    />
    <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black opacity-70 w-full h-full absolute top-0 left-0"></div>
    <div className="absolute p-12 w-full h-full top-0">
      <h3 className="text-5xl">Bug Tracker</h3>
      <div className="mt-8 flex gap-2 flex-wrap">
        <span className="bg-gray-500 px-3 rounded-xl">React</span>
        <span className="bg-green-500 px-3 rounded-xl">Redux (toolkit)</span>
        <span className="bg-yellow-500 px-3 rounded-xl text-black">
          Typescript
        </span>
        <span className="bg-blue-500 px-3 rounded-xl">Unit Testing</span>
        <span className="bg-indigo-500 px-3 rounded-xl">
          JWT Authentication
        </span>
      </div>
    </div>
  </div>;
  return (
    <section className="text-gray-600 body-font dark:text-gray-400">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <StaticImage
            className="object-cover rounded bg-indigo-100"
            alt="hero"
            src="../images/bug-tracker-screenshot.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">
            Bug Tracker
          </h1>
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

          <div className="flex justify-center mt-12">
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
              <Link to="/bug-tracker">Behind the scenes</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;
