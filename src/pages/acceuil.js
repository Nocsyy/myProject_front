import React from 'react';

function Accueil() {
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{backgroundImage: "url('chemin/vers/votre/image.jpg')" }} id="acceuil">
      <div className="text-center text-black">
        <h1 className="text-4xl font-bold mb-8">Pour des toitures et façades éclatantes</h1>
        {/* Vous pouvez ajouter d'autres éléments ici, comme des boutons d'appel à l'action ou des informations sur les services */}
      </div>
    </div>
  );
}

export default Accueil;