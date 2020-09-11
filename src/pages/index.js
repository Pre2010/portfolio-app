import React from "react";
import {graphql} from 'gatsby';
import Layout from "../components/layout";
import Hero from "../components/sections/heroSection";
import Contact from "../components/sections/contactSection";
import About from "../components/sections/aboutSection";

const IndexPage = ({data}) => (
  <Layout>
    <Hero data={data.hero.edges} />
    <About data={data.about.edges} />
    <Contact data={data.contact.edges} />
  </Layout>
);

export default IndexPage



export const query = graphql`
    {
      hero: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
      edges {
        node {
          id
          frontmatter {
            heroIntroduction
            heroName
            heroSubtitle
            heroDescription
            image {
              publicURL
            }
          }
        }
      }
    },
      about: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            professionalImage {
              publicURL
            }
            professionalDescription
            personalImage {
              publicURL
            }
            personalDescription
            techDescription
            techs
          }
        }
      }
    },
    contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            firstParagraph
            secondParagraph
            thirdParagraph
            button
            image {
              publicURL
            }
        }
      }
    }
  }
}
`;