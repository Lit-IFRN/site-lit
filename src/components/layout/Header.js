import React from 'react';
import { Link } from 'gatsby';
import Logo from '../Logo';

const Header = () => (
  <header className="sm:sticky top-0 bg-white shadow z-50">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <Link to="/" className="w-16 mr-3">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-row text-xl sm:text-base text-center sm:flex-row mt-4 sm:mt-0">
        <Link className="px-4" to="/">
          Home
        </Link>
        <Link className="px-4" to="/projetos">
          Projetos
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
