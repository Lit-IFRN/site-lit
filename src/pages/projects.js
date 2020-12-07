import Layout from '../components/layout/Layout'
import Card from '../components/Card'

const Projects = () => {

  return (
    <Layout>
      <div className="container mx-auto px-8">
        <h1 className="mb-6 text-2xl lg:text-3xl xl:text-5xl text-center mt-2">Todos os projetoss</h1>
        <div className="flex flex-col md:flex-row flex-wrap">
          <Card className="w-3/12 mx-2 p-">
            <img className="w-8/12 mb-4 object-cover rounded-full" src="https://i.ytimg.com/vi/WU4Lhw0ikLA/maxresdefault.jpg"/>
            <p className="text-xl text-center font-semibold">Smart Farm</p>
          </Card>

        </div>


      </div>
    </Layout>
  )
}

export default Projects;