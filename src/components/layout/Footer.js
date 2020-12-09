import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Sobre Nós</h2>
        <p className="mt-5">Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Links Úteis</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Política de Privacidade</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Redes Sociais</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://dev.to/changoman">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;