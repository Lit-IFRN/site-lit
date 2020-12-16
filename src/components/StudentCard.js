import React from 'react';
import { Linkedin, Github, InstagramAlt } from '@styled-icons/boxicons-logos';
import Card from './Card';
import lattesIcon from '../assets/lattes_icon.png';

const LattesIcon = ({ className }) => {
  return <img className={className} style={{ width: 22, height: 22 }} src={lattesIcon} />;
};

const StudentCard = ({ student }) => (
  <Card className="w-full">
    <img
      className="w-10/12 mb-4 rounded-full"
      src={student.imageUrl || 'https://suap.ifrn.edu.br/media/alunos/219588.aX8YW2BqOJRx.jpg'}
      alt={`Foto do estudante ${student.name}`}
    />
    <p className="text-xl text-center font-semibold">{student.name}</p>
    <div className="flex flex-col mt-1 items-center">
      <div className="text-center mb-4">
        <p>{student.course}</p>
      </div>

      <div className="flex flex-row items-end social-icons mb-4">
        {student.linkedin && (
          <a target="_blank" href={student.linkedin}>
            <Linkedin className="mx-1" />
          </a>
        )}
        {student.github && (
          <a target="_blank" href={student.github}>
            <Github className="mx-1" />
          </a>
        )}
        {student.instagram && (
          <a target="_blank" href={student.instagram}>
            <InstagramAlt className="mx-1" />
          </a>
        )}
        {student.lattes && (
          <a target="_blank" href={student.lattes}>
            <LattesIcon className="mx-1" />
          </a>
        )}
      </div>

      <a
        target="_blank"
        href={student.curriculum}
        className="py-2 hover:text-white px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-none"
      >
        Ver currículo
      </a>
    </div>
  </Card>
);

export default StudentCard;
