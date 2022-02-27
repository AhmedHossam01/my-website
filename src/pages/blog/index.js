import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

const index = ({ data }) => {
  return (
    <Layout pageTitle="Blog - Ahmed Hoosam">
      <Helmet>
        <meta name="description" content="Developer Ahmed Hossam's blog" />
      </Helmet>

      <div className="py-16 container">
        <div className="mb-6 underline decoration-sky-500 decoration-wavy text-2xl underline-offset-2">
          Latest Articles
        </div>
        <div className="grid md:grid-cols-1 gap-12">
          {data.allMdx.nodes.map((node) => (
            <PostCard post={node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;

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
