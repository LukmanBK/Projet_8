// Importation des ressources necessaires 
import aboutBanner from '../../assets/aboutBanner.png'
import styles from '../About/About.module.scss'
import Banner from "../../components/Banner/banner"
import Loader from '../../components/Loader/loader'
import FetchData from "../../datas/fetchData"
import Collapse from "../../components/Collapse/collapse"

//Requete pour obtenir les donnees de la page about
export default function About() {

    const url = '/src/datas/value.json'
    const value = FetchData(url)

    // Affiche Loader pendant le chargement des donnees et message d'erreur en cas d'echec de la requete
    if (value.isLoading) {
        return <Loader />
    }
    if (value.error) {
        return <div>Erreur de chargement...</div>
    }

    // structure de page
    return (
        <main className={styles.mainContainer}>
            <Banner>
                <img src={`${aboutBanner}`} alt="image bannière" />
            </Banner>
            <section className= {styles.description}>
                {value.dataLog.map(({id, title, detail}) =>
                    <Collapse 
                        key={id} 
                        title={title} 
                        detail={<p>{detail}</p>} 
                    >
                    </Collapse>
                )}
            </section>
          
        </main>
    )
}