import React, { useState } from 'react'

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
function IconSlider({ slides = defaultSlides }) {
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
        } else if (index === (current + 1) % length) {
            return 'secondary-slide'
        } else {
            return 'hidden-slide'
        }
    }
    return (
        <div className="slider-section">
            <div className="toggle-btn" onClick={prevSlide}><img src="/assets/svg/TheIcons/togglebtn.svg" alt="" /></div>
            <div className="slider-main">
                {slides.map((slide, index) => {
                    return <div className={'slide-item ' + getSlideClass(index)} key={index}>
                        <img src={slide} alt="" />
                    </div>

                })}

            </div>
            <div className="toggle-btn toggle-btn-2" onClick={nextSlide}><img src="/assets/svg/TheIcons/togglebtn.svg" className='rotated' alt="" /></div>
        </div>
    )
}

export default IconSlider