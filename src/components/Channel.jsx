import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";

const Channel = ({ channel }) => {
  return (
    <div className="dark:bg-slate-900 bg-white text-center w-full flex flex-col gap-4 items-center p-4">
      <a href={channel.link} target="_blank" rel="noreferrer">
        <GatsbyImage
          image={getImage(channel.localImage)}
          alt={channel.channelName}
          className="h-24 w-24 rounded-full object-cover"
        />
      </a>

      <a
        href={channel.link}
        target="_blank"
        className="flex gap-1 flex-col items-center"
        rel="noreferrer"
      >
        <h2>{channel.channelName}</h2>

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
    </div>
  );
};

export default Channel;
