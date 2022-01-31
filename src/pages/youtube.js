import { graphql } from "gatsby";
import * as React from "react";
import Channel from "../components/Channel";
import Layout from "../components/Layout";

const Youtube = ({ data }) => {
  const channels = data.allChannelsJson.nodes;

  return (
    <Layout pageTitle="My Youtube Subscriptions">
      <div className="container py-12">
        <h1 className="font-bold text-3xl md:text-5xl mb-8">
          My Youtube Subscriptions
        </h1>

        <a
          href="https://www.youtube.com/channel/UCjRVMR_XHu0vKK5rXzdS-UQ/channels"
          target="_blank"
          rel="noreferrer"
          className="text-sky-700 bg-sky-200 hover:bg-sky-100 transition rounded-md px-2 py-1 flex w-fit gap-1"
        >
          View on YouTube
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-sky-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        <div className="dark:bg-slate-800">
          <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
            {channels.map((channel) => (
              <Channel channel={channel} key={channel.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allChannelsJson {
      nodes {
        localImage {
          childImageSharp {
            gatsbyImageData(width: 192)
          }
        }
        id
        featured
        channelName
        link
      }
    }
  }
`;

export default Youtube;
