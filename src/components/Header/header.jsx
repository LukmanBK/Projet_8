import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/LOGO_home.png'
import style from '../Header/Header.module.scss'



export default function Header() {
    return (
        <header>
    <nav className={style.nav}>
    <img src={`${logoHeader}`} alt='logo Kasa' className={style.nav__logo}/>
        <ul className={style.nav__link}>
            <li>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/about'>À Propos</NavLink>
            </li>
        </ul>
    </nav>
</header>

    )
}

