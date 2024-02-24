import React from 'react'
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


export default function MainBody() {

    const movieSlider = movies.slice(movies.length - 10, movies.length)
    console.log(movieSlider)

    return (
        <div className='main-body-container'>
            <div className='top-main-body'></div>
            <div className='container main-sliders'>
                <SliderTitle
                    title={"Movies"}
                    btn={true}
                    href={"movies"}
                />
                <div className='slider-form'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}

                        className="mySwiper"
                    >
                        {movieSlider.map(movie => (
                            <SwiperSlide>
                                <MovieBox poster={"horiz"} {...movie} series={false}/>
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
                        slidesPerView={5}
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
                        slidesPerView={8}
                        spaceBetween={30}
                        loop={true}

                        className="mySwiper"
                    >
                        {
                            actors.map(actor => (
                                <SwiperSlide>
                                    <Link className='router-link' to={`/cast/${actor.id}`}>
                                        <Celebriti {...actor} />
                                    </Link>
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

