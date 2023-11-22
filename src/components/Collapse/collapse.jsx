import { useEffect, useRef, useState } from 'react'
import style from '../Collapse/Collapse.module.scss'
import contract from '../../assets/arrowContract.png'
import { PropTypes } from 'prop-types'


export default function Collapse (props) {
    const [hidden, setHidden] = useState(false)
    const [contentHeight, setContentHeight] = useState('0px')
    const containerHeight = useRef()

    useEffect(() => {
        if(containerHeight.current){
        setContentHeight(`${containerHeight.current.scrollHeight}px`)
        }
    }, [])

    const handleDropdownClick = () =>
        setHidden(!hidden)

    return (
        <div className={hidden ? style.collapseClose : style.collapseOpen}>
            <button onClick={handleDropdownClick}>
                <h2>{props.title}</h2>
                <img src={contract} alt='arrow' className={hidden ? style.collapseArrow__close : style.collapseArrow__open} />
            </button>
            <div className={style.collapseContent} ref={containerHeight} style={{height: hidden ? `${contentHeight}` : '0px'}}>{props.detail}</div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    detail: PropTypes.node.isRequired
};

