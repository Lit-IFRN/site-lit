import LinesEllipsis from 'react-lines-ellipsis';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import useProjects from '../hooks/useProjects';
import findImage from '../utils/findImage';

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { regex: "/images/i" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const ProjectCard = ({ title, description = 'Descrição', image, url = '' }) => (
  <div className="sm:w-6/12 lg:w-4/12 ">
    <Card className="m-3 shadow-lg" noPadding>
      <Img fluid={image} className=" sm:mb-4 rounded-t-lg w-full object-cover" alt={title} />
      <div className="p-1 sm:p-3">
        <Link to={url}>
          <h1 className="text-xl text-center font-bold sm:mb-4">{title}</h1>
        </Link>

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

const Projects = ({ data: { allFile } }) => {
  const images = allFile.edges;
  const projects = useProjects();

  return (
    <Layout>
      <div className="mx-auto container px-8">
        <h1 className="mb-6 text-2xl lg:text-3xl xl:text-5xl text-center mt-2">
          Todos os projetos
        </h1>
        <div className="flex items-center flex-col sm:flex-row flex-wrap">
          {projects.map(project => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={findImage(images, project.image_name)}
              url={project.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
