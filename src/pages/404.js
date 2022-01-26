import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 Not Found - Ahmed Hossam">
      <div className="h-screen flex items-center justify-center flex-col">
        <h1 className="text-7xl font-bold">Page Not Found! 😔</h1>
        <Link
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
          className="flex gap-1 mt-12 text-white bg-slate-600 transition px-2 py-1 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
            />
          </svg>
          Go Back Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
