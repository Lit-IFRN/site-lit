import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from "@mdx-js/react"
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

const H1 = (props) => (
  <h1 {...props} className="
    text-3xl
    mt-8
    mb-1
    text-lg
    font-black
    font-title
    text-color-title
  "></h1> 
)
//#093145
const H2 = (props) => (
  <h1 {...props} className="
    text-2xl
    font-medium
    mt-6
    mb-1
    text-base
  "></h1> 
)

const H3 = (props) => (
  <h1 {...props} className="
    text-xl
    font-medium
    mt-6
    mb-2
    text-sm
  "></h1> 
)


const Paragraph = (props) => (
  <p {...props} className="
    text-xl 
    text-indigo-900
    text-paragraph
    leading-relaxed
    text-justify
    ">
  </p>
)


// Titulo
// fell, Georgia, Cambria, "Times New Roman", Times, serif

// Texto
// charter, Georgia, Cambria, "Times New Roman", Times, serif;


const Project = ({ data: { mdx: project } }) => (
  <MDXProvider
    components={{
      p: Paragraph,
      h1: H1,
      h2: H2,
      h3: H3,
    }}
  >

    <ProjectLayout>
      <H1 className="text-4xl font-medium font-title text-color-dark"> {project.frontmatter.title} </H1>

      <img src={project.frontmatter.image_url} className='mx-auto mt-10 mb-4'/>

      <p className='text-xl text-indigo-900 text-paragraph leading-relaxed'>
        {project.frontmatter.description}
      </p>

      <MDXRenderer>{project.body}</MDXRenderer>
    </ProjectLayout>
  </MDXProvider>
);

export default Project;