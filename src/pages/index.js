import '../styles/globals.css';
import Navbar from '../components/NavBar';
import { useState, useEffect } from 'react';
import Accueil from './acceuil';
import Card from '../components/cardService'
import About from '@/components/about';
import Footer from '../components/footer';
import Form from '../components/form'

export default function MyApp({ Component }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Charger l'état de connexion initial à partir du stockage local lors du chargement initial de l'application
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
    console.log("Is Logged In:", isLoggedIn); // Ajout du console.log pour vérifier la valeur
  }, []); // Utiliser un tableau vide en tant que dépendance pour s'assurer que cela ne se produit qu'une seule fois

  // Fonction appelée lors de la connexion réussie
  const handleLogin = () => {
    // Mettre à jour l'état de connexion
    setIsLoggedIn(true);
    // Stocker l'état de connexion de l'utilisateur dans le stockage local
    localStorage.setItem('isLoggedIn', true);
  };

  // Fonction appelée lors de la déconnexion
  const handleLogout = () => {
    // Mettre à jour l'état de connexion
    setIsLoggedIn(false);
    // Supprimer l'état de connexion de l'utilisateur du stockage local
    localStorage.removeItem('isLoggedIn');

    // Envoyer une requête AJAX pour se déconnecter
    fetch('http://localhost:8000/api/logout/', {
        method: 'POST', // Vous pouvez utiliser la méthode GET ou POST selon votre configuration
        credentials: 'same-origin', // Assurez-vous d'envoyer les cookies de session
    })
    .then(response => {
        if (response.ok) {
            // La déconnexion a réussi
            console.log('Déconnecté avec succès');
            // Effectuer toute autre action nécessaire après la déconnexion
        } else {
            // La déconnexion a échoué
            console.error('Erreur lors de la déconnexion');
            // Gérer l'erreur de déconnexion
        }
    })
    .catch(error => {
        console.error('Erreur lors de la déconnexion:', error);
        // Gérer les erreurs de connexion
    });
};
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      {/* Appel à votre composant Component */}
      <Accueil/>
      <Card/>
      <About/>
      <Form/>
      <Footer/>
      
    </>
  );
}