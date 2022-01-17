import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const PostCard = ({ post }) => {
    return (
        <div className="flex flex-col gap-4 group">
            <Link to={`blog/${post.slug}`}>
                <GatsbyImage
                    className="rounded-xl drop-shadow-md w-full h-36 lg:h-28"
                    image={getImage(post.frontmatter.hero_image)}
                    alt={post.frontmatter.hero_image_alt}
                />
            </Link>

            <div>
                <p className="font-light text-sm">10 days ago</p>
                <h2 className="text-3xl">
                    <Link to={`blog/${post.slug}`}>
                        {post.frontmatter.title}
                    </Link>
                </h2>
                <p className="text-gray-600 mt-2">
                    The difference between them is, the box-shadow property creates
                    a rectangular shadow behind an element's entire box.
                </p>
            </div>

            <Link className="w-[fit-content] group-hover:px-2 rounded-md group-hover:ml-2 group-hover:shadow-sm group-hover:bg-white font-semibold text-slate-700 duration-200 group-hover:text-fuchsia-600" to={`blog/${post.slug}`}>Read more →</Link>
        </div>
    )
}

export default PostCard
