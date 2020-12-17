import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import StudentCard from './StudentCard'
import students from '../data/student-data.js';

const ProjectLayout = ({ projectSlug, children }) => {
  const participants = students.filter(student =>
    student.projects.includes(projectSlug)
  );

  return (
    <>
      <Header />

      <div className="container mx-auto max-w-4xl font-sans w-11/12 md:w-full ">{children}</div>
        <div className="flex mt-2 justify-center flex-wrap w-8/12 mx-auto">
          {participants.map((participant, index) => (
            <StudentCard className=" w-12/12 sm:w-6/12 lg:w-4/12 sm:mx-3 " key={index} student={participant} />
          ))}
        </div>
      <Footer /> 
    </>
  );
};

export default ProjectLayout;
