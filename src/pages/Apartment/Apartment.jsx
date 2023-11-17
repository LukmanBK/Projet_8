// Integration des outils de routage, recuperation des donnees, importe les styles
import { useParams, useNavigate } from 'react-router-dom'
import FetchData from '../../datas/fetchData'
import style from '../Apartment/Apartment.module.scss'

import Loader from '../../components/Loader/loader'


// Recuperation des données 
export default function Apartment() {
    
    const descriptionTitle = 'Description'
    const equipmentTitle = 'Équipement'
    const url = '/src/datas/logement.json'
    const {id} = useParams()
    const navigate = useNavigate()
    const apartment = FetchData(url) 
    
    // gestion de l'état de chargement et des erreurs
    if (apartment.isLoading) { //
        return <Loader />
    }
    if (apartment.error) {
        return <div>Erreur de chargement...</div>
    }
    const getApartmentById = apartment.dataLog.find((item) => item.id === id) 
    if(getApartmentById === undefined){
        navigate('/NotFound') // redirection vers la page 'NotFound' si aucun appartement n'est trouvé
    }
    
  
}