import React from "react";
import {graphql} from 'gatsby';
import Layout from "../components/layout";
import Hero from "../components/sections/heroSection";
import Contact from "../components/sections/contactSection";
import About from "../components/sections/aboutSection";
import Projects from "../components/sections/projectsSection";
import Work from "../components/sections/workSection";


const IndexPage = ({data}) => (
  <Layout>
    <Hero data={data.hero.edges} />
    <About data={data.about.edges} />
    <Work data={data.work.edges} />
    <Projects data={data.projects.edges} />
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
              id
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 650, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
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
            childImageSharp {
              fluid(maxHeight: 400, maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          professionalDescription
          personalImage {
            publicURL
            childImageSharp {
              fluid(maxHeight: 400, maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          personalDescription
          techDescription
          techs
        }
      }
    }
  },
    work: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work/"}}, 
      sort: {order: DESC, fields: frontmatter___id}) {
        edges {
          node {
            id
            frontmatter {
              id
              title
              company
              startDate
              endDate
              technology
              jobDescription
            }
          }
        }
        totalCount
    }
    projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, 
    sort: {order: DESC, fields: frontmatter___id}) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            github
            livePreviewUrl
            image {
              childImageSharp {
                fluid(maxHeight: 300, maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
            description
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
            childImageSharp {
              fluid(maxHeight: 550, maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  }
}
`;