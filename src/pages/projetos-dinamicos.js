import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import useProjects from '../hooks/useProjects';

const CardAlo = ({ title, description = 'Descrição', image_name, url = '' }) => (
  <div className="w-12/12 sm:w-6/12 lg:w-4/12 ">
    <Card className="m-3 shadow-lg" noPadding>
      <img className="sm:mb-4 rounded-t-lg object-cover w-100" src={image_name} />

      <div className="p-1 sm:p-3">
        <h1 className="text-xl text-center font-bold sm:mb-4">{title}</h1>

        <LinesEllipsis
          component="p"
          className="text-center"
          text={description}
          maxLine="3"
          ellipsis={<Link to={`/projetos/${url}`}>... ler mais</Link>}
          trimRight
          basedOn="letters"
        />
      </div>
    </Card>
  </div>
);

const Projects = () => {
  const projects = useProjects();
  return (
    <Layout>
      <div className="mx-auto container px-8">
        <h1 className="mb-6 text-2xl lg:text-3xl xl:text-5xl text-center mt-2">
          Todos os projetos
        </h1>
        <div className="flex items-center flex-col sm:flex-row flex-wrap">
          {projects.map(project => (
            <CardAlo
              key={project.slug}
              title={project.title}
              description={project.description}
              image_name={project.image_name}
              url={project.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
