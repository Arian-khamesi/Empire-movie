import React, { useEffect, useState } from 'react'
import "./Cast.css"
import Topbar from "./../../Component/Header/Topbar"
import Footer from '../../Component/Footer/Footer'
import MovieBox from '../../Component/SliderBox/MovieBox'
import { Link, useParams } from 'react-router-dom'
import SliderTitle from '../../Component/SliderTitle/SliderTitle'
import { actors } from '../../DataBase/data'
import { movies } from '../../DataBase/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


export default function Cast() {
  const [actorMovie, setActorMovie] = useState([])
  const { castID } = useParams()
  const mainActor = actors.find(actor => actor.id == castID)

  console.log(mainActor);
  useEffect(() => {
    const defaultActor = actors.find(actor => actor.id == castID)
    console.log(defaultActor);
    if (defaultActor.movies.length === 1) {
      for (let index = 0; index < defaultActor.movies.length; index++) {
        const findMovie = movies.find(movie => movie.name === mainActor.movies[index])
        setActorMovie(pre => [...pre, findMovie])
      }
    } else {
      for (let index = 0; index <= defaultActor.movies.length; index++) {
        const findMovie = movies.find(movie => movie.name === mainActor.movies[index])
        setActorMovie(pre => [...pre, findMovie])
      }
    }
    ////////////////////////////////////////////
    if (widthScreen < 800) {
      setViewPort(1)

    }
    if (widthScreen > 800 && widthScreen < 1200) {
      setViewPort(2)
      setSwiperSpace(15)
    }
  }, [])
  console.log(actorMovie);


  ////////////////////////////////////////////////////////////////////////////////////


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

  const [widthScreen, setWidthScreen] = useState(useWindowDimensions().width)
  const [viewPort, setViewPort] = useState(3)
  const [swiperSpace, setSwiperSpace] = useState(20)


  return (
    <div className="cast-container">
      <div className="gray"></div>
      <div><Topbar /></div>
      <div className="cast">
        <div className="cast-left">
          <img src={mainActor.img} alt="" className="cast-poster" />
          <div className="cast-score"></div>
        </div>
        <div className="cast-right">
          <div className="castrmation">
            <span className='birthday-cast'>{mainActor.birth}</span>
            <span className='age-cast'>Age : {mainActor.age}</span>
            <span className='role-cast'>Actor</span>
          </div>
          <div className="movie-description">
            <h1 className='cast-title'>{mainActor.name}</h1>
            <p className='cast-desc'><span className='biography'>Biography :</span>{mainActor.desc}</p>
          </div>
        </div>
      </div>
      <div className="container zIndex padding">
        <SliderTitle
          title={"Movies"}
          btn={false}
        />
      </div>
      <div className="cast-movie container">
        {
          actorMovie.length > 3 ? (
            <Swiper
              slidesPerView={viewPort}
              spaceBetween={swiperSpace}
              loop={true}

              className="mySwiper"
            >
              {
                actorMovie.slice(0, actorMovie.length - 1).map(movie => (
                  <SwiperSlide>
                    <Link className='router-link' to={"/movie-info/movieName"}>
                      <MovieBox poster={"horiz"} {...movie} />
                    </Link>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          ) : (
            <div className='effects'>
              {actorMovie.map(movie => (

                <Link className='router-link' to={"/movie-info/movieName"}>
                  <MovieBox poster={"horiz"} {...movie} />
                </Link>

              ))}
            </div>
          )

        }

        {/* <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
        <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
        <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
        <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link>
        <Link className='router-link' to={"/movie-info/movieName"}><MovieBox poster={"vert"} /></Link> */}
      </div>
     <Footer/>
    </div>
  )
}
