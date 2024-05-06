import AllMovies from "./Pages/AllMovies/AllMovies";
import Index from "./Pages/Index";
import Login from "./Pages/Login/Login";
import MovieInfo from "./Pages/MovieInfo/MovieInfo";
import Register from "./Pages/Register/Register";
import UserPanel from "./Pages/UserPanel/UserPanel";
import Cast from "./Pages/Cast/Cast"
import ShowAll from "./Pages/ShowAll/ShowAll";

const routes=[
    {path:"/",element:<Index/>},
    // {path:"/:userID",element:<Index/>},
    {path:"/all-movies",element:<AllMovies/>},
    {path:"/movie-info/:movieType/:movieId",element:<MovieInfo/>},
    {path:"/user-panel",element:<UserPanel/>},
    {path:"/login",element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"/cast/:castID",element:<Cast/>},
    {path:"/show-all/:type/:page",element:<ShowAll/>},
]

export default routes;