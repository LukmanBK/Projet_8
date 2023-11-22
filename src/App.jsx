import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import AppRoutes from './components/AppRoutes/appRoutes'
import './App.module.scss'



export default function App() {
  document.title = 'Site Kasa - Location d appartements entre particuliers'
  
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}
