import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <p className="bg-red-500">Hello World</p>
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
