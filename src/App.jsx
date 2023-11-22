// Importations des composants de react router , des composants de page de l'application et des styles globaux

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Apartment from './pages/Apartment/Apartment'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './App.module.scss'




//Mise en place du routage pour l'application 
export default function App() {
  document.title = 'Site Kasa - Location d appartements entre particuliers'
  
  return (
    <>
      <Header />
        <Routes>
          <Route 
            path='/home' 
            element={<Home />}
            errorElement={<NotFound />}
          />
          <Route 
            path='/appartement/:id'
            element={<Apartment />}
            errorElement={<NotFound />}
          />
          <Route 
            path='/about' 
            element={<About />}
          />
          <Route 
            path='/*' 
            element={<NotFound />}
          />
        </Routes>
      <Footer />
    </>
  )
}
