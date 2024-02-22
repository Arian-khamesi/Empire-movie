import React from 'react'
import "./MainBody.css"
import SliderTitle from '../SliderTitle/SliderTitle'
import MovieBox from '../SliderBox/MovieBox'
import Celebriti from '../Celebriti/Celebriti'
import { Link } from 'react-router-dom'

export default function MainBody() {
    return (
        <div className='main-body-container'>
            <div className='top-main-body'></div>
            <div className='container main-sliders'>
                <SliderTitle
                    title={"Movies"}
                    btn={true}
                />
                <div className='slider-form'>
                    <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"horiz"} /></Link>
                    <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"horiz"} /></Link>
                    <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"horiz"} /></Link>
                </div>
                <SliderTitle
                    title={"Series"}
                    btn={true}
                />
                <div className='slider-form-vert'>
                    <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
                    <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
                    <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
                    <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
                    <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
                </div>
                <SliderTitle
                    title={"Actors"}
                    btn={true}
                />
                <div className="slider-form-vert">
                    <Celebriti />
                    <Celebriti />
                    <Celebriti />
                    <Celebriti />
                    <Celebriti />
                    <Celebriti />
                    <Celebriti />
                </div>
            </div>
            <div className="top-footer"></div>
        </div>
    )
}

