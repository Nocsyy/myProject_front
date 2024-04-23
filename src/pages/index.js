import '../styles/globals.css';
import Navbar from '../components/NavBar';
import { useState, useEffect } from 'react';
import Accueil from './acceuil';
import Card from '../components/cardService'
import About from '../components/about';
import Footer from '../components/footer';
import Form from '../components/form'
import { LoginButton } from '../components/auth/loginButton';

export default function Index() {

  return (
    <>
      <Navbar />
      <Accueil/>
      <Card/>
      <About/>
      <Form/>
      <LoginButton/>
    </>
  );
}