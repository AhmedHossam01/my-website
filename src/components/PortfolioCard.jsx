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
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              <Link to="/bug-tracker">Behind the scenes</Link>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;
