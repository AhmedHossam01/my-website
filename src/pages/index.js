import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Info from "../components/Info";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page - Ahmed Hossam">
      <Helmet>
        <meta
          name="description"
          content="Developer Ahmed Hossam's blog and portfolio"
        />
      </Helmet>

      <div className="bg-sky-50 lg:pt-28 lg:pb-16 pt-16 dark:bg-slate-900">
        <div className="container">
          <Info />
        </div>
      </div>

      <div className="py-16 container">
        <div className="mb-6 underline decoration-sky-500 decoration-wavy text-2xl underline-offset-2">
          Latest Articles
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {data.allMdx.nodes.map((node) => (
            <PostCard post={node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          excrept
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
          hero_image_alt
        }
        id
        slug
        parent {
          ... on File {
            modifiedTime
          }
        }
      }
    }
  }
`;

export default IndexPage;
