import  { useState, useEffect } from 'react'

// On crée un hook personnalisé pour charger les donnee depuis l'url
export default function FetchData (url) {
    
    // On initialise les etats pour les donnees recuperees, le chargement et les erreurs
    const [dataLog, setDataLog] = useState(null)
    const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)

    //On execute une fonction asynchrone pour fetcher les donnees, gerer les erreurs et mettre a jour le etats
    useEffect(() => {
        setLoading(true)
        async function fetchDataLogement() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setDataLog(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchDataLogement()
    }, [url])
    return { 
        isLoading, 
        dataLog, 
        error
    }
}