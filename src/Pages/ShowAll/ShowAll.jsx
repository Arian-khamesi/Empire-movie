import React, { useState } from 'react'
import "./ShowAll.css"
import Topbar from '../../Component/Header/Topbar'
import { useParams } from 'react-router-dom'
import { movies } from '../../DataBase/data'
import MovieBox from '../../Component/SliderBox/MovieBox'
import { series } from '../../DataBase/data'
import { actors } from '../../DataBase/data'
import Celebriti from '../../Component/Celebriti/Celebriti'
import Pagination from '../../Component/Pagination/Pagination'
import Footer from '../../Component/Footer/Footer'

export default function ShowAll() {

    const { type } = useParams()

    const [shownMovies, setShownMovies] = useState([])
    const [shownSeries, setShownSeries] = useState([])
    const [shownActors, setShownActors] = useState([])

    return (
        <div className="all-container">
            <div className="gray"></div>
            <div><Topbar /></div>

            {type === "movies" &&

                <div className="boxContainer">
                    <div className={type === "movies" ? "all-m" : "all"}>
                        {
                            shownMovies.map(movie =>
                                <MovieBox {...movie} poster={"horiz"}
                                    series={false} />
                            )
                        }
                    </div>
                    <Pagination
                        item={movies}
                        itemCount={6}
                        pathName={`/show-all/${type}`}
                        setShownCourses={setShownMovies}
                        className="mb-5" />
                </div>



            }
            {type === "series" &&
                <>
                    <div className="boxContainer">
                        <div className={type === "movies" ? "all-m" : "all"}>
                            {
                                shownSeries.map(serie =>
                                    <MovieBox {...serie} poster={"vert"}
                                        series={true} />
                                )
                            }
                        </div>
                        <Pagination
                            item={series}
                            itemCount={6}
                            pathName={`/show-all/${type}`}
                            setShownCourses={setShownSeries} />
                    </div>
                </>
            }
            {type === "actors" &&
                <>
                    <div className="boxContainer">
                        <div className={type === "movies" ? "all-m" : "all"}>
                            {
                                shownActors.map(actor =>
                                    <Celebriti {...actor} />
                                )
                            }
                        </div>
                        <Pagination
                            item={actors}
                            itemCount={6}
                            pathName={`/show-all/${type}`}
                            setShownCourses={setShownActors} />
                    </div>
                </>
            }
            <div className="top-footer"></div>
            <Footer/>


        </div>
    )
}
