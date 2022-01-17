import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Info from "../components/Info";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Layout pageTitle="Home Page">
      <div className="container mt-12">
        <Info />
      </div>

      <div className="grid md:grid-cols-3 gap-12 mt-16 container mb-12">
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
