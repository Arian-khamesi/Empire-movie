import React, { useEffect, useState } from 'react'
import "./MainBody.css"
import SliderTitle from '../SliderTitle/SliderTitle'
import MovieBox from '../SliderBox/MovieBox'
import Celebriti from '../Celebriti/Celebriti'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { movies } from '../../DataBase/data'
import { actors } from "../../DataBase/data"
import { series } from "../../DataBase/data"


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function MainBody() {

    const movieSlider = movies.slice(movies.length - 10, movies.length)
    console.log(movieSlider)

    ///////////////////////////////////////////////


    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }


    //////////////////////////////////////////////////////////////
    const [widthScreen, setWidthScreen] = useState(useWindowDimensions().width)
    const [viewPort, setViewPort] = useState(3)
    const [viewPortSeries, setViewPortSeries] = useState(5)
    const [viewPortActor, setViewPortActor] = useState(8)
    const [swiperSpace, setSwiperSpace] = useState(20)

    useEffect(() => {
        if (widthScreen < 800) {
            setViewPort(1)
            setViewPortSeries(2)
            setViewPortActor(3)
        }
        if (widthScreen > 800 && widthScreen < 1200) {
            setViewPort(2)
            setSwiperSpace(15)
            setViewPortSeries(3)
            setViewPortActor(5)
        }
        if (widthScreen > 1200) {
            setViewPortSeries(4)
        }
    })




    return (
        <div className='main-body-container'>
            {console.log(viewPort)}
            <div className='top-main-body'></div>
            <div className='container main-sliders'>
                <SliderTitle
                    title={"Movies"}
                    btn={true}
                    href={"movies"}
                />
                <div className='slider-form'>
                    <Swiper
                        slidesPerView={viewPort}
                        spaceBetween={swiperSpace}

                        className="mySwiper"
                    >
                        {movieSlider.map(movie => (
                            <SwiperSlide>
                                <MovieBox poster={"horiz"} {...movie} series={false} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <SliderTitle
                    title={"Series"}
                    btn={true}
                    margin={true}
                    href={"series"}
                />
                <div className='slider-form-vert'>
                    <Swiper
                        slidesPerView={viewPortSeries}
                        spaceBetween={30}
                        loop={true}

                        className="mySwiper"
                    >
                        {series.slice(0, 8).map(item => (
                            <SwiperSlide>

                                <MovieBox poster={"vert"} {...item} series={true} />

                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                <SliderTitle
                    title={"Actors"}
                    btn={true}
                    margin={true}
                    href={"actors"}
                />
                <div className="slider-form-vert">
                    <Swiper
                        slidesPerView={viewPortActor}
                        spaceBetween={30}
                        loop={true}

                        className="mySwiper"
                    >
                        {
                            actors.map(actor => (
                                <SwiperSlide>
                                        <Celebriti {...actor} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
            <div className="top-footer"></div>
        </div>
    )
}

