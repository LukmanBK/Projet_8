import style from './Carousel.module.scss';
import { useState } from 'react';
import arrowLeft from '../../assets/arrowleft.png';
import arrowRight from '../../assets/arrowRight.png';
import { PropTypes } from 'prop-types';

export default function Carousel ({pictures}) {

    // State Initialization
    const [pictureCurrent, setPictureCurrent] = useState(0);
    const slidesLength = pictures.length;

    const numberSlide = `${pictureCurrent + 1} / ${slidesLength}` 

// Navigation Slide
    function nextSlide() {
        setPictureCurrent(pictureCurrent === slidesLength - 1 ? 0 : pictureCurrent + 1);
    }

    function prevSlide() {
        setPictureCurrent(pictureCurrent === 0 ? slidesLength - 1 : pictureCurrent - 1);
    }

    
    return (
        <section  className={style.sectionImageRental}>
           
            {slidesLength > 1 &&
            <>
                <img src={arrowLeft} alt="Image précédente" onClick={prevSlide} className={style.arrowLeft}/>
                <img src={arrowRight} alt="Image suivante" onClick={nextSlide} className={style.arrowRight}/>
            </>
            }
            <div className={style.slider}>
            {pictures.map((slide, index) => {
                return (
                    <div key={index} className={pictureCurrent === index ? style.slideActive : style.slide}>
                        {index === pictureCurrent &&
                            <>
    
                                <img src={slide} alt={`photo de l'appartement`} />
                                {slidesLength > 1 &&
                                // Indication de la position actuelle
                                    <span className={style.slideNumber}>{numberSlide}</span>
                                }
                            </>
                        }
                    </div>
                )})}
            </div>
        </section>
    );
}

Carousel.propTypes = {
    length: PropTypes.number
}