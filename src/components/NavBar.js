import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ isLoggedIn, onLogin, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    /*
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-400">Toiture</Link>
          <Link href="/categories" className="hover:text-gray-400">Façade</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-400">Pour des toitures et façades éclatantes</Link>
        </div>

        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/moncompte" className="hover:text-gray-400">Mon Compte</Link>
              <button onClick={onLogout} className="hover:text-gray-400">Déconnexion</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-400">Connexion</Link>
              <Link href="/signup" className="hover:text-gray-400">Inscription</Link>
            </>
          )}
        </div>
      </div>
    </nav>
*/
<nav className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 fixed inset-x-5">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
   
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Memo Netoyage</span>
  </Link>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contactez nous</button>
  </div>
  <div className="hidden md:block md:w-auto" id="navbar-dropdown">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
          Acceuil
        </Link>
      </li>
      <li className="group relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
        <button className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
          Service
          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div className={`absolute z-10 ${isDropdownOpen ? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`} id="dropdownNavbar" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            <li>
              <Link href="/nettoyage-toiture" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Nettoyage toiture
              </Link>
            </li>
            <li>
              <Link href="/nettoyage-facade" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >
                Nettoyage façade
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link href="/qui-sommes-nous" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
         Qui sommes nous ?
        </Link>
      </li>
    </ul>
  </div>
</div>
</nav>

  );
}