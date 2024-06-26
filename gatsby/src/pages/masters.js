import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Pagination from "../components/Pagination";
import SEO from "../components/Seo";

const MastersGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const MasterStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    transform: rotate(1deg);
    text-align: center;
  }
`;

const SliceMastersPage = ({ data, pageContext }) => {
  return (
    <>
      <SEO title="Slice Masters" description="A list of our masters" />
      <MastersGrid>
        {data.masters.nodes.map((person) => (
          <MasterStyles key={person.id}>
            <h2>
              <span className="mark">{person.name}</span>
            </h2>
            <Img fluid={person.image.asset.fluid} />
            <p className="description">{person.description}</p>
          </MasterStyles>
        ))}
      </MastersGrid>
      <Pagination
        pageSize={3}
        totalCount={data.masters.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/masters"
      />
    </>
  );
};

export default SliceMastersPage;

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 3) {
    masters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
