import styles from '../Banner/Banner.module.scss'
import '../../../style.css'
import { PropTypes } from 'prop-types'


export default function Banner ({ children }) {
    return (
        <div className = {styles.Banner}>{children}</div>
    )
}

Banner.propTypes = {
    children: PropTypes.node.isRequired
    }