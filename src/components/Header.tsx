'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../public/unifatecie.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-100">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={300} height={84} />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex">
          <li className="mx-2">
            <a href="/">Home</a>
          </li>
          <li className="mx-2">
            <a href="/graduacao">Graduação</a>
          </li>
          <li className="mx-2">
            <a href="/pos">Pós-Graduação</a>
          </li>
          <li className="mx-2">
            <a href="/matricule-se">Matricule-se</a>
          </li>
          <li className="mx-2">
            <a href="/saiba-mais">Saiba Mais</a>
          </li>
          <li className="mx-2">
            <a href="/contatos">Contatos</a>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden">
        <button
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:hidden absolute top-14 right-0 bg-gray-100 w-full`}
      >
        <ul className="flex flex-col text-center">
          <li className="mx-2">
            <a href="/">Home</a>
          </li>
          <li className="mx-2">
            <a href="/graduacao">Graduação</a>
          </li>
          <li className="mx-2">
            <a href="/pos">Pós-Graduação</a>
          </li>
          <li className="mx-2">
            <a href="/matricule-se">Matricule-se</a>
          </li>
          <li className="mx-2">
            <a href="/saiba-mais">Saiba Mais</a>
          </li>
          <li className="mx-2">
            <a href="/contatos">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;