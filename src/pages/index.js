import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Layout>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </Layout>
    </div>
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
