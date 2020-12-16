import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';

const CardAlo = ({ url = '/' }) => (
  <div className="w-12/12 sm:w-6/12 lg:w-4/12 ">
    <Card className="m-3 shadow-lg" noPadding>
      <img
        className="sm:mb-4 rounded-t-lg object-cover w-100"
        src="https://i.ytimg.com/vi/WU4Lhw0ikLA/maxresdefault.jpg"
      />

      <div className="p-1 sm:p-3">
        <h1 className="text-xl text-center font-bold sm:mb-4">Smart Farm</h1>

        <LinesEllipsis
          component="p"
          className="text-center"
          text="Este trabalho propõe a continuação do desenvolvimento do sistema Br-Agro4. Esse sistema irá atuar junto à atividade rural, suprindo as necessidades tecnológicas do processo evolutivo de produção na Agricultura 4.0, focando inicialmente nas principais atividades e culturas desenvolvidas na agricultura familiar do Seridó."
          maxLine="3"
          ellipsis={<Link to={url}>... ler mais</Link>}
          trimRight
          basedOn="letters"
        />
      </div>
    </Card>
  </div>
);

const Projects = () => {
  return (
    <Layout>
      <div className="mx-auto container px-8">
        <h1 className="mb-6 text-2xl lg:text-3xl xl:text-5xl text-center mt-2">
          Todos os projetos
        </h1>
        <div className="flex items-center flex-col sm:flex-row  flex-wrap">
          <CardAlo url="/projetos/example" />
          <CardAlo url="/projetos/example" />
          <CardAlo url="/projetos/example" />
          <CardAlo url="/projetos/example" />
          <CardAlo url="/projetos/example" />
          <CardAlo url="/projetos/example" />
          <CardAlo url="/projetos/example" />
          <CardAlo url="/projetos/example" />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
