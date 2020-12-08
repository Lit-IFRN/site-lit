import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ProjectLayout from '../components/ProjectLayout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        image_url
    }
      body
    }
  }
`;

const Project = ({ data: { mdx: project } }) => (
  <ProjectLayout>
    <h1> {project.frontmatter.title} </h1>
    <p>
        {project.frontmatter.description}
    </p>

    <img src={project.frontmatter.image_url}/>
    <MDXRenderer>{project.body}</MDXRenderer>
  </ProjectLayout>
);

export default Project;