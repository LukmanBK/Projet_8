import styles from '../Home/home.module.scss'
import bannerPic from '../../assets/bannerPic.png'
import Banner from '../../components/Banner/banner'
import Card from '../../components/Card/card'
import Loader from '../../components/Loader/loader'
import FetchData from '../../datas/fetchData'

export default function Home() {

    const url = '/src/datas/logement.json'
    const apartment = FetchData(url)
    
    if (apartment.isLoading) {
        return <Loader />
    }
    if (apartment.error) {
        return <div>Erreur de chargement...</div>
    }

    return (
        <main className={styles.mainContainer}>
            <Banner>
                <img src={`${bannerPic}`} alt="image bannière" />
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <ul className={styles.gallery}>
                {apartment.dataLog.map(({id, title, cover}) =>
                    <li key={id}>
                        <Card
                            id={id}
                            title={title}
                            cover={cover}
                        />
                    </li>
                )}
            </ul>
        </main>
    )
}