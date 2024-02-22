import React from 'react'
import "./MainBody.css"
import SliderTitle from '../SliderTitle/SliderTitle'
import MovieBox from '../SliderBox/MovieBox'
import Celebriti from '../Celebriti/Celebriti'

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
                    <MovieBox poster={"horiz"} />
                    <MovieBox poster={"horiz"} />
                    <MovieBox poster={"horiz"} />
                </div>
                <SliderTitle
                    title={"Series"}
                    btn={true}
                />
                <div className='slider-form-vert'>
                    <MovieBox poster={"vert"}/>
                    <MovieBox poster={"vert"}/>
                    <MovieBox poster={"vert"}/>
                    <MovieBox poster={"vert"}/>
                    <MovieBox poster={"vert"}/>
                </div>
                <SliderTitle
                    title={"Actors"}
                    btn={true}
                />
                <div className="slider-form-vert">
                    <Celebriti/>
                    <Celebriti/>
                    <Celebriti/>
                    <Celebriti/>
                    <Celebriti/>
                    <Celebriti/>
                    <Celebriti/>
                </div>
            </div>
            <div className="top-footer"></div>
        </div>
    )
}

