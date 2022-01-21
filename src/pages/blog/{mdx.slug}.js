import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article
        className="px-4 py-20 mx-auto max-w-7xl"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
          <div className="pb-6 mb-6 border-b border-gray-200">
            <h1
              className="mb-3 text-3xl font-bold text-gray-900 dark:text-slate-100 md:leading-tight md:text-4xl"
              itemProp="headline"
              title={data.mdx.frontmatter.title}
            >
              {data.mdx.frontmatter.title}
            </h1>
            <p className="text-base text-gray-500">
              {data.mdx.frontmatter.date} — Written by Ahmed Hossam
            </p>
          </div>
          <GatsbyImage
            image={heroImage}
            alt={data.mdx.frontmatter.hero_image_alt}
            className="object-cover w-full h-64 bg-center rounded"
          />
        </div>

        <div className="w-full mx-auto prose dark:prose-invert md:w-3/4 lg:w-1/2 prose-img:rounded-xl prose-a:text-blue-600">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
