import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800 ">
    <div className="flex justify-between -mx-3 ">
      <div className="px-3">
        <h2 className="text-lg font-semibold">Sobre Nós</h2>
        <p className="mt-5">Ridiculus mus mauris </p>
      </div>
      <div className="px-3">
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
      <div className="px-3">
        <h2 className="text-lg font-semibold ml-auto">Redes Sociais</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.instagram.com/lit.ifrn/">Instagram</a>
          </li>
          <li>
            <a href="http://github.com/lit-IFRN/">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
