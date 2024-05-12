import React from 'react'
import "./MovieInfo.css"
import Topbar from "./../../Component/Header/Topbar"
import Footer from '../../Component/Footer/Footer'
import { useParams } from 'react-router-dom'
import {movies} from '../../DataBase/data'
import { series } from '../../DataBase/data'

export default function MovieInfo() {

  const { movieId } = useParams()
  const {movieType } = useParams()
  console.log(movieId);
  console.log(movieType);

  const mainMovie = movies.find(movie => movie.id == movieId)
  const mainSerie = series.find(serie => serie.id == movieId)

  return (
    <div className={movieType==="movie"?"movie-info-container":"serie-info-container"} style={movieType==="movie"?{backgroundImage: `url(${mainMovie.img})`}:{backgroundImage: `url(${mainSerie.img})`}}>
      <div className="gray-movie-info"></div>
      <div className='topbar-z'><Topbar gradiant={true} /></div>
      <div className="movie-info">
        <div className="movie-info-left">
          <img src={movieType==="movie"?mainMovie.img:mainSerie.img} alt="" className={movieType==="movie"?"movie-info-poster":"serie-info-poster"} />
          {/* <div className="movie-info-score"></div> */}
        </div>
        <div className="movie-info-right">
          <div className="movie-information">
            <span className='time-movie'>{movieType==="movie"?"Time":"Season"} : {movieType==="movie"?mainMovie.time:mainSerie.season}</span>
            <span className='date-movie'>Year : {movieType==="movie"?mainMovie.year:mainSerie.year}</span>
            <span className='score-imdb-movie'>IMDB : {movieType==="movie"?mainMovie.score:mainSerie.score}</span>
          </div>
          <div className="movie-description">
            <h1 className='movie-info-title'>{movieType==="movie"?mainMovie.name:mainSerie.name}</h1>
            <p className='movie-info-desc'><span className='overview'>Overview :</span>{movieType==="movie"?mainMovie.desc:mainSerie.desc}</p>
          </div>
        </div>
      </div>
      <div className="top-footer"></div>
      <Footer/>
    </div>
  )
}
