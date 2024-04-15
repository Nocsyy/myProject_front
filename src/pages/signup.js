import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
const [passwordError, setPasswordError] = useState('');
const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  
  const [passwordConditions, setPasswordConditions] = useState({
    minLength: false,
    oneUpperCase: false,
    oneLowerCase: false,
    oneNumber: false,
    oneSpecialChar: false,
  });
  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@(gmail\.com|hotmail\.com|outlook\.com|orange\.fr|free\.fr|sfr\.fr|yahoo\.fr|yahoo\.com)$/;
    if (!regex.test(email)) {
        setEmailError("L'adresse email doit être une adresse valide de Gmail, Hotmail, Outlook, Orange, Free, SFR, ou Yahoo.");
    } else {
      setEmailError('');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    if (name === 'email' || name === 'confirmEmail') {
      validateEmail(value);
    }
  
    if (name === 'password') {
      validatePassword(value);
    }
    
  };

  const validatePassword = (password) => {
    const conditions = {
      minLength: password.length >= 12,
      oneUpperCase: /[A-Z]/.test(password),
      oneLowerCase: /[a-z]/.test(password),
      oneNumber: /[0-9]/.test(password),
      oneSpecialChar: /[!@#$%^&*]/.test(password),
    };
    setPasswordConditions(conditions);

    const allConditionsPassed = Object.values(conditions).every(Boolean);
    setPasswordError(allConditionsPassed ? '' : 'Votre mot de passe ne répond pas à toutes les conditions requises.');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!Object.values(passwordConditions).every(Boolean)) {
      alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
      return;
    }
    if (emailError || passwordError) {
        alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
        return;
      }
    try {
        const response = await axios.post('http://localhost:8000/api/signup/', formData);
        console.log(response.data); // Affiche la réponse du backend
        alert("Inscription réussie!");
    } catch (error) {
        console.error(error);
        alert("Une erreur s'est produite lors de l'inscription.");
    }
    console.log(formData);
  };
  return (
    <>
      <Head>
        <title>Inscription</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-black">Inscrivez-vous</h1>
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">Prénom</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">Nom</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                />
                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div>
              <label htmlFor="confirmEmail" className="block text-sm font-medium">Confirmez l'email</label>
              <input
                type="email"
                name="confirmEmail"
                id="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
              {/* Conditions de mot de passe */}
              <div className="mt-2">
                <ul className="list-disc pl-5 text-sm">
                  <li className={`${passwordConditions.minLength ? 'text-green-500' : 'text-red-500'}`}>Au moins 12 caractères</li>
                  <li className={`${passwordConditions.oneUpperCase ? 'text-green-500' : 'text-red-500'}`}>Une majuscule</li>
                  <li className={`${passwordConditions.oneLowerCase ? 'text-green-500' : 'text-red-500'}`}>Une minuscule</li>
                  <li className={`${passwordConditions.oneNumber ? 'text-green-500' : 'text-red-500'}`}>Un chiffre</li>
                  <li className={`${passwordConditions.oneSpecialChar ? 'text-green-500' : 'text-red-500'}`}>Un caractère spécial (!@#$%^&*)</li>
                </ul>
              </div>
              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirmez le mot de passe</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Téléphone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                pattern="0[67][0-9]{8}"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <p className="text-xs mt-1">Doit commencer par 06 ou 07</p>
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium">Rôle</label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Sélectionnez un rôle</option>
                <option value="vendeur">Vendeur</option>
                <option value="acheteur">Acheteur</option>
              </select>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-light-green hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </>
  );
}