import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './layout/Header';
import Footer from './layout/Footer';
import StudentCard from './StudentCard';
import findImage from '../utils/findImage';
import students from '../data/student-data.js';

const ProjectLayout = ({ projectSlug, children }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "profiles" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 123, maxHeight: 123) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const images = allFile.edges;
  const participants = students.filter(student => student.projects.includes(projectSlug));

  return (
    <>
      <Header />

      <div className="container mx-auto max-w-4xl font-sans w-11/12 lg:w-full ">{children}</div>

      <div
        className="flex justify-center flex-wrap mt-10 mx-auto w-full"
        style={{ maxWidth: 1000 }}
      >
        {participants.map((participant, index) => (
          <StudentCard
            className="w-52 mb-6 mx-4"
            key={index}
            student={participant}
            image={findImage(images, participant.imageName)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProjectLayout;
