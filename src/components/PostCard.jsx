import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import calcTimeAgo from "../utils/calcTimeAgo";

const PostCard = ({ post }) => {
  console.log(getImage(post.frontmatter.hero_image));
  return (
    <div className="flex flex-col gap-4 group">
      <Link to={`/blog/${post.slug}`}>
        <GatsbyImage
          className="rounded-xl shadow-md w-full h-36 lg:h-28"
          image={getImage(post.frontmatter.hero_image)}
          alt={post.frontmatter.hero_image_alt}
        />
      </Link>

      <div>
        <p className="font-light text-sm dark:text-slate-100">
          {calcTimeAgo(new Date(post.frontmatter.date))}
        </p>
        <h2 className="text-3xl dark:text-slate-100">
          <Link to={`blog/${post.slug}`}>{post.frontmatter.title}</Link>
        </h2>

        {post.frontmatter.excrept && (
          <p className="text-gray-600 mt-2 dark:text-slate-400">
            {post.frontmatter.excrept}
          </p>
        )}
      </div>

      <Link
        className="w-[fit-content] group-hover:px-2 rounded-md group-hover:ml-2 group-hover:shadow-md group-hover:shadow-blue-500/50 font-semibold text-slate-700 dark:text-slate-300 duration-200 group-hover:text-white group-hover:bg-blue-500"
        to={`blog/${post.slug}`}
      >
        Read more →
      </Link>
    </div>
  );
};

export default PostCard;
