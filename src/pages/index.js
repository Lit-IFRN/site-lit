import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import StudentCard from '../components/StudentCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import studentData from '../data/student-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby"

import Slider from "react-slick";
import {SmartFarmImages, JogoImages, SusImages} from '../data/projects-data'
import {Rewards} from '../data/rewards-data'
import coordinators from '../data/coordinator-data'
const settings = {
  infinite: true,
    
  draggable: false,
  autoplay: true,
  autoplaySpeed: 800,
  speed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '100px'
      }
    },
    {
      breakpoint: 360,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px'
      }
    }
  ]

};

const projectCarouselSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1
}

const ProjectCarousel = ({images}) => {

  return (
    <Slider {...projectCarouselSettings}>
      {images.map(image => <img src={image}/>)}
    </Slider>
  )
}

export default () => (
  <Layout>



    <section id="about" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl xl:text-6xl font-bold leading-none">
            Laboratório de Inovação Tecnológica
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Desenvolvendo o desenvolvimento dos desenvolvedores do Agro
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">colocar redes sociais</Button>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>

    
    <section id="premios" className="pt-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Prêmios</h2>
        <div className="flex flex-col flex-wrap sm:flex-row sm:-mx-3 mt-12">
          {Rewards.map(reward => (
            <div className=" md:w-4/12 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">{reward.title}</p>
              <p className="mt-4">
                {reward.description}
              </p>
              <a className="mt-2" href={reward.link}>Confira</a>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="projetos" className="pt-20 lg:pt-32">
      <div className="container mx-auto ">
        <h2 className="text-3xl lg:text-5xl text-center font-semibold">Projetos</h2>
      
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">SmartFarm</h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi eligendi aliquam odit esse sed laudantium adipisci blanditiis architecto, deserunt, laboriosam ab! Perspiciatis ut, tempore hic repellat ullam facilis provident.
              </p>
            </div>
          }
          secondarySlot={<ProjectCarousel images={SmartFarmImages} />}
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Jogo de JV
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tempore minima sapiente rerum inventore necessitatibus, facere odit totam. Id provident ex, cum sunt quam dolore sed totam voluptatum. Commodi, illum?
              </p>
            </div>
          }
          secondarySlot={<ProjectCarousel images={JogoImages} />}
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                Mineração do SUS
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat corporis velit hic molestias at numquam, illo dolore. Impedit, quod assumenda. Asperiores eos officia dolorem distinctio quam sit suscipit facilis atque.
              </p>
            </div>
          }
          secondarySlot={<ProjectCarousel images={SusImages} />}
        />

        <div className="container text-center mx-auto">
          <Link className="text-xl" to={"/projects"}>Ver todos projetos</Link></div>
        </div>
    </section>

    <section id="coordenadores" className="pt-20 lg:pt-32">
      <div className="container mx-auto  text-center ">
      <h2 className="text-3xl lg:text-5xl text-center font-semibold">Coordenadores</h2>
          <div className="flex flex-col items-center justify-between flex-wrap sm:flex-row sm:-mx-3 mt-12">
          {
            coordinators.map(coordinator => (
                <Card className="w-10/12 mb-4 sm:w-3/12 mx-4 p-2">
                  <img className="w-8/12 mb-4 object-contain rounded-full" src={coordinator.imageUrl}/>
                  <p className="text-xl text-center font-semibold">{coordinator.name}</p>
                </Card>
            ))
          }
        </div>
      </div>
    </section>
    <section id="equipe" className="pt-20 lg:pt-32">
      <div className="container overflow-y-hidden	 mx-auto">
      <h2 className="text-3xl lg:text-5xl text-center font-semibold">Alunos</h2>
        <Slider {...settings}>
          {studentData.map((student, index) => (
            <div key={index} className="flex-1 outline-none mx-4 p-2">
              <StudentCard student={student} />
            </div>
          ))}
        </Slider>
      </div>
    </section>



    
  </Layout>
);
