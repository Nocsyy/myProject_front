// pages/login.js
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios'; 
import { useRouter } from 'next/router'; 

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData);
      console.log(response.data);
      alert("Connexion réussie!");
      
      // Stocker l'état de connexion de l'utilisateur, par exemple dans le stockage local
      localStorage.setItem('isLoggedIn', true);
      // Redirection vers la page d'accueil
      router.push('/',  { isLoggedIn: true });
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data) {
        console.error('Response data:', error.response.data);
      }
      alert("Erreur lors de la connexion. Veuillez vérifier vos informations.");
    }
  };

  return (
    <>
      <Head>
        <title>Connexion</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-black">Connexion</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Identifiant</label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </>
  );
}