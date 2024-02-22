import AllMovies from "./Pages/AllMovies/AllMovies";
import Index from "./Pages/Index";
import Login from "./Pages/Login/Login";
import MovieInfo from "./Pages/MovieInfo/MovieInfo";
import Register from "./Pages/Register/Register";
import UserPanel from "./Pages/UserPanel/UserPanel";

const routes=[
    {path:"/",element:<Index/>},
    {path:"/all-movies",element:<AllMovies/>},
    {path:"/movie-info/:movieName",element:<MovieInfo/>},
    {path:"/user-panel",element:<UserPanel/>},
    {path:"/login",element:<Login/>},
    {path:"/register",element:<Register/>},
]

export default routes;