import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import ProjectLayout from '../components/ProjectLayout';
import StudentCard from '../components/StudentCard';
import students from '../data/student-data.js';

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

const H1 = props => (
  <h1
    {...props}
    className="
    text-3xl
    mt-8
    mb-1
    text-left
    font-black
    font-title
    text-color-title
    
  "
  />
);
// #093145
const H2 = props => (
  <h1
    {...props}
    className="
    text-2xl
    font-medium
    mt-6
    mb-1
    "
  />
);

const H3 = props => (
  <h1
    {...props}
    className="
    text-xl
    font-medium
    mt-6
    mb-2
  "
  />
);

const Paragraph = props => (
  <p
    {...props}
    className="
    text-mobile
    text-color-paragraph
    leading-smug
    md:text-2xl
    "
  />
);

// Titulo
// fell, Georgia, Cambria, "Times New Roman", Times, serif

// Texto
// charter, Georgia, Cambria, "Times New Roman", Times, serif;

const Project = ({ data: { mdx: project } }) => {
  const participants = students.filter(student =>
    student.projects.includes(project.frontmatter.slug)
  );

  return (
    <MDXProvider
      components={{
        p: Paragraph,
        h1: H1,
        h2: H2,
        h3: H3
      }}
    >
      <ProjectLayout>
        <h1 className="mt-2 md:mt-5 md:mb-0 text-5xl font-medium font-title text-color-dark text-center">
          {' '}
          {project.frontmatter.title}{' '}
        </h1>
        <img src={project.frontmatter.image_url} className="mx-auto mt-6 mb-4" />
        <Paragraph>{project.frontmatter.description}</Paragraph>
        <MDXRenderer>{project.body}</MDXRenderer>
        {participants.map(a => (
          <StudentCard student={a} />
        ))}
      </ProjectLayout>
    </MDXProvider>
  );
};

export default Project;
