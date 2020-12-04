import React from 'react';
import Card from './Card';
import {Instagram, Github, PlayStore, Spotify, Whatsapp} from "@styled-icons/boxicons-logos"
const StudentCard = ({ student }) => (
  <Card className="w-10/12 sm:w-56">
      <img
        className="w-10/12 mb-4 rounded-full"
        src={student.imageUrl || "https://suap.ifrn.edu.br/media/alunos/219588.aX8YW2BqOJRx.jpg"}
        alt={`Foto do estudante ${student.name}`}
      />
    <p className="text-xl text-center font-semibold">{student.name}</p>
    <div className="flex flex-col mt-4 items-center">  
      <div className="text-center mb-4">
        <p>{student.course}</p>
      </div>
      <div className="flex flex-row social-icons">
        <Instagram className="mx-1"/>
        <Github className="mx-1" />
        <PlayStore className="mx-1" />
        <Spotify className="mx-1" />
        <Whatsapp className="mx-1" />
      </div>
    </div>
  </Card>
);

export default StudentCard;
