import { useParams, useNavigate } from 'react-router-dom'
import FetchData from '../../datas/fetchData'
import style from '../Apartment/Apartment.module.scss'
import Collapse from '../../components/Collapse/collapse'
import Loader from '../../components/Loader/loader'
import OwnerInfo from '../../components/OwnerInfo/ownerInfo'
import Rating from '../../components/Rating/rating'
import Carousel from '../../components/Carousel/carousel'

export default function Apartment() {
    
    const descriptionTitle = 'Description'
    const equipmentTitle = 'Équipement'
    const url = '/src/datas/logement.json'
    const {id} = useParams()
    const navigate = useNavigate()
    const apartment = FetchData(url) 
    
    
    if (apartment.isLoading) { //
        return <Loader />
    }
    if (apartment.error) {
        return <div>Erreur de chargement...</div>
    }
    const getApartmentById = apartment.dataLog.find((item) => item.id === id) 

    if(getApartmentById === undefined){
        navigate('/NotFound')
    }
    
    return (
        <>
                 
            <main key= {getApartmentById.id} className={style.mainContainer}>
            <Carousel
                id={getApartmentById.id}
                pictures={getApartmentById.pictures}
                />
                <section className= {style.sectionInfo}>
                    <article className={style.apartmentInfo}>
                        <div className={style.apartmentTitle__detail}>
                            <h2>{getApartmentById.title}</h2>
                            <p>{getApartmentById.location}</p>
                        </div>
                        <ul className={style.apartmentTitle__tag}>
                            {getApartmentById.tags.map((tag, index) =>
                                <li key={index}>{tag}</li>
                            )}
                        </ul>
                    </article>
                    <article className={style.infoOwner}>
                        <OwnerInfo 
                            key={`${getApartmentById.host.name}-${getApartmentById.host.index}`}
                            name={getApartmentById.host.name}
                            picture={getApartmentById.host.picture}
                        />
                        <Rating 
                            ratingValue={getApartmentById.rating}
                        />
                    </article>
                </section>
                <section className= {style.sectionCollapse}>
                        <Collapse
                            key={`description appartment ${id}`}
                            title={descriptionTitle}
                            detail={<p>{getApartmentById.description}</p>}
                        >
                        </Collapse>
                        <Collapse
                            key={`equipments appartment ${id}`}
                            title={equipmentTitle}
                            detail={
                                <ul>
                                {getApartmentById.equipments.map((equipment, index) =>
                                    <li key={index}>{equipment}</li>
                                )}
                                </ul>
                            }
                        >
                        </Collapse>
                </section>
            </main>
        </>
    )

}