import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Linkedin, Github, InstagramAlt } from '@styled-icons/boxicons-logos';
import Card from './Card';


const LattesIcon = ({ className }) => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lattes_icon.png" }) {
        childImageSharp {
          fixed(width: 22, height: 22) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <Img fixed={file.childImageSharp.fixed} className={className} />;
};

const StudentCard = ({ student, className, image, ...props }) => (
  <Card className={className || 'w-full '} {...props}>
    <Img
      fluid={image}
      alt={`Foto do estudante ${student.name}`}
      className="w-full mb-4 rounded-full"
    />
    <p className="text-xl text-center font-semibold">{student.name}</p>
    <div className="flex flex-col mt-1 items-center">
      <div className="text-center mb-4">
        <p>{student.course}</p>
      </div>

      <div className="flex flex-row items-end social-icons mb-4">
        {student.linkedin && (
          <a target="_blank" rel="noreferrer" href={student.linkedin}>
            <Linkedin className="mx-1" />
          </a>
        )}
        {student.github && (
          <a target="_blank" rel="noreferrer" href={student.github}>
            <Github className="mx-1" />
          </a>
        )}
        {student.instagram && (
          <a target="_blank" rel="noreferrer" href={student.instagram}>
            <InstagramAlt className="mx-1" />
          </a>
        )}
        {student.lattes && (
          <a target="_blank" rel="noreferrer" href={student.lattes}>
            <LattesIcon className="mx-1" />
          </a>
        )}
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        href={student.curriculum}
        className="py-2 hover:text-white px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-none"
      >
        Ver currículo
      </a>
    </div>
  </Card>
);

export default StudentCard;
