import React, { useState } from 'react'
import AccessPoints from '../GetAccess/AccessPoints';

const defaultSlides = [
    "/assets/images/NFT-graphics/Ali-min.png",
    "/assets/images/NFT-graphics/Barak-min.png",
    "/assets/images/NFT-graphics/Future-min.png",
    "/assets/images/NFT-graphics/Katherine_Johnson-min.png",
    "/assets/images/NFT-graphics/Mandela-min.png",
    "/assets/images/NFT-graphics/Mike-min.png",
    "/assets/images/NFT-graphics/Nipsey-min.png",
    "/assets/images/NFT-graphics/Rihanna_-min.png",


]
function CardSlider({ slides = defaultSlides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const getSlideClass = (index) => {
        if (index === current) {
            return 'primary-slide'
        } else {
            return 'hidden-slide'
        }
    }
    return (
        <div className="card-slider-section mobile">

            <div className="card-slider-main">
                <div className="toggle-btn toggle-btn-1" onClick={prevSlide}><img src="/assets/svg/TheIcons/togglebtn.svg" alt="" /></div>
                {slides.map((slide, index) => {

                    return <div className={'slide-item ' + getSlideClass(index)} key={index}>
                        <AccessPoints
                            data={slide}
                        />
                    </div>

                })}
                <div className="toggle-btn toggle-btn-2" onClick={nextSlide}><img src="/assets/svg/TheIcons/togglebtn.svg" className='rotated' alt="" /></div>
            </div>
            <div className='nav-dots'>
                {slides.map((slide, index) => {

                    return <div className={'slide-dots ' + getSlideClass(index)} key={index}></div>

                })}
            </div>

        </div>
    )
}

export default CardSlider