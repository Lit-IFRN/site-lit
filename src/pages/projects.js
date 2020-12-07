import Layout from '../components/layout/Layout'
import Card from '../components/Card'

const Projects = () => {

  return (
    <Layout>
      <div className="container mx-auto px-8">
        <h1 className="mb-6 text-2xl lg:text-3xl xl:text-5xl text-center mt-2">Todos os projetos</h1>
        <div className="flex flex-col md:flex-row flex-wrap">
          <Card className="w-4/12 mx-2 p-1">
            <img style={{width: 150, height: 150}}className="mb-4 object-cover rounded-full" src="https://i.ytimg.com/vi/WU4Lhw0ikLA/maxresdefault.jpg"/>
            <h1 className="text-xl text-center font-bold mb-2">Smart Farm</h1>


            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, aspernatur asperiores vel nesciunt sequi animi quisquam amet doloribus repellat minima quidem ipsum autem sit a impedit sunt rem quos officia.
            </p>   
          </Card>

        </div>


      </div>
    </Layout>
  )
}

export default Projects