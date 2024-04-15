import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MonCompte() {
  const [utilisateur, setUtilisateur] = useState(null);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const fetchUtilisateur = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user'); // Assurez-vous d'adapter l'URL à votre configuration
        setUtilisateur(response.data);
        setChargement(false); // Marquer le chargement comme terminé
        console.log('Utilisateur récupéré :', response.data); // Afficher les données de l'utilisateur dans la console
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur :', error);
        setChargement(false); // Marquer le chargement comme terminé même en cas d'erreur
      }
    };

    fetchUtilisateur();
  }, []);

  if (chargement) {
    return <div>Chargement...</div>;
  }

  if (!utilisateur) {
    return <div>Erreur lors de la récupération des informations utilisateur.</div>;
  }

  return (
    <div>
      <h1>Mon Compte</h1>
      <p>Adresse : {utilisateur.adresse}</p>
      <p>Numéro de téléphone : {utilisateur.numero_telephone}</p>
      <p>Rôle : {utilisateur.role}</p>
      {/* Ajoutez des champs de formulaire pour permettre à l'utilisateur de modifier ses informations */}
    </div>
  );
}