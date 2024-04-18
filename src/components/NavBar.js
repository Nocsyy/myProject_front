import Link from 'next/link';
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Navbar({ isLoggedIn, onLogin, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      smooth: true,
      duration: 500
    });
  };

  return (
      <nav className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 fixed inset-x-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <ScrollLink
            to="acceuil"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            onClick={() => scrollToSection('top')}
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Memo Netoyage</span>
          </ScrollLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            onClick={() => scrollToSection('top')}
          >
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contactez nous</button>
          </ScrollLink>
          </div>
          <div className="hidden md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <ScrollLink
                  to="acceuil"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  Acceuil
                </ScrollLink>
              </li>
              <li className="group relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            
                <ScrollLink
                        to="service"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onSetActive={handleSetActive}
                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      >
                      Service
                      </ScrollLink>
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
              
                <div className={`absolute z-10 ${isDropdownOpen ? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`} id="dropdownNavbar" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <Link href='#'
                      >
                        Nettoyage toiture
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        Nettoyage façade
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <ScrollLink
                  to="qui-sommes-nous"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={handleSetActive}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  Qui sommes nous ?
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}