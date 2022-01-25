import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Info from "../components/Info";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page - Ahmed Hossam">
      <div className="bg-sky-50 lg:py-28 pt-16 dark:bg-slate-900">
        <div className="container">
          <Info />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 container py-16">
        {data.allMdx.nodes.map((node) => (
          <PostCard post={node} />
        ))}
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
