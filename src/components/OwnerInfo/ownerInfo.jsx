import { PropTypes } from 'prop-types'
import style from './OwnerInfo.module.scss'


export default function OwnerInfo ({ name, picture }) {

    
	return (
        <div className= {style.ownerInfo}>
            <h3>{name}</h3>
            <img src={picture} alt={`photo de profil de l'hôte ${name}`} />
        </div>
	)
}

OwnerInfo.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
}