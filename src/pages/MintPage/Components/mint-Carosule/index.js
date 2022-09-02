import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


// import required modules
import { FreeMode, Pagination } from "swiper";



const MintSlider = () => {


    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"

                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    "@0.75": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}

            >
                <SwiperSlide>
                    <div className="image-wrapper">
                        <img src="../../../../../assets/images/NFT-graphics/Ali-min.png" alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide> <div className="image-wrapper">
                    <img src="../../../../../assets/images/NFT-graphics/Barak-min.png" alt="" />

                </div></SwiperSlide>
                <SwiperSlide>
                    <div className="image-wrapper">
                        <img src="../../../../../assets/images/NFT-graphics/Future-min.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-wrapper">
                        <img src="../../../../../assets/images/NFT-graphics/Katherine_Johnson-min.png" alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-wrapper">
                        <img src="../../../../../assets/images/NFT-graphics/Mandela-min.png" alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-wrapper">
                        <img src="../../../../../assets/images/NFT-graphics/Mike-min.png" alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-wrapper">
                        <img src="../../../../../assets/images/NFT-graphics/Nipsey-min.png" alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-wrapper">
                        <img src="../../../../../assets/images/NFT-graphics/Rihanna_-min.png" alt="" />

                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    )
}

export default MintSlider