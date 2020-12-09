import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../assets/logo_lit2019.png';

const Header = () => (
  <header className="top-0 bg-white shadow z-50">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <AnchorLink href="#about" className="w-16 mr-3">
          <img src={LogoIcon} />
        </AnchorLink>
      </div>
      <div className="flex flex-col text-xl sm:text-base text-center sm:flex-row mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="/#projetos">
          Projetos
        </AnchorLink>
        <AnchorLink className="px-4" href="/#coordenadores">
          Coordenadores
        </AnchorLink>
        <AnchorLink className="px-4" href="/#equipe">
          Equipe
        </AnchorLink>
        <AnchorLink className="px-4" href="/#premios">
          Prêmios
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
