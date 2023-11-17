// Importation des dépendances nécéssaires 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.module.scss"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound.jsx'


// Configuration du routeur qui definit un element d'application par defaut et un element d'erreur pour les chemins non reconnus
const router = createBrowserRouter([
  {
    path:'*',
    element: <App />,
    errorElement: <NotFound />
  }
])


// Rendu de l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
