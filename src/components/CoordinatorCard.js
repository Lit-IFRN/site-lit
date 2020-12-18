import React from 'react';
import { Linkedin, Github, InstagramAlt } from '@styled-icons/boxicons-logos';
import Card from './Card';
import lattesIcon from '../assets/lattes_icon.png';

const LattesIcon = ({ className }) => {
  return <img className={className} style={{ width: 22, height: 22 }} src={lattesIcon} />;
};

const CoordinatorCard = ({ coordinator }) => (
  <Card className="coordinator-card w-6/12 sm:w-3/12 m-4">
    <img
      className="w-10/12 mb-4 rounded-full"
      src={coordinator.imageName || 'https://suap.ifrn.edu.br/media/alunos/219588.aX8YW2BqOJRx.jpg'}
      alt={`Foto do coordenador ${coordinator.name}`}
    />
    <p className="text-xl text-center font-semibold">{coordinator.name}</p>
    <div className="flex flex-col mt-1 items-center">
      <div className="flex flex-row items-end social-icons mb-4">
        {coordinator.linkedin && (
          <a target="_blank" href={coordinator.linkedin}>
            <Linkedin className="mx-1" />
          </a>
        )}
        {coordinator.github && (
          <a target="_blank" href={coordinator.github}>
            <Github className="mx-1" />
          </a>
        )}
        {coordinator.instagram && (
          <a target="_blank" href={coordinator.instagram}>
            <InstagramAlt className="mx-1" />
          </a>
        )}
        {coordinator.lattes && (
          <a target="_blank" href={coordinator.lattes}>
            <LattesIcon className="mx-1" />
          </a>
        )}
      </div>

      <a
        target="_blank"
        href={coordinator.curriculum}
        className="py-2 hover:text-white px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-none"
      >
        Ver currículo
      </a>
    </div>
  </Card>
);

export default CoordinatorCard;
