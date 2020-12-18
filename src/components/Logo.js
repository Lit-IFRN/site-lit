import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Logo = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_lit.png" }) {
        childImageSharp {
          fixed(width: 72) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={file.childImageSharp.fixed} />;
};

export default Logo;
