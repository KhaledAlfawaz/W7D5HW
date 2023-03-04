import { getAllMovies,createMovie,updateMovie,deleteMovie,getMovieByName,getAllMoviesGenre,getAllMoviesRating } from '../controllers/movie.controller'
import express from 'express'
import {createMovieType , updateMovieType , deleteMovieType , getMovieByNameType , getAllMoviesByGenreType , getAllMoviesRatingType} from '../zod.schema/zod.movie'
import validate from '../middleware/validate'

const route = express.Router()

route.get('/', getAllMovies )

route.post('/', validate(createMovieType) , createMovie)

route.put('/', validate(updateMovieType) ,updateMovie)

route.delete('/',validate(deleteMovieType),deleteMovie)

route.get('/byName',validate(getMovieByNameType),getMovieByName )

route.get('/byGenre',validate(getAllMoviesByGenreType),getAllMoviesGenre )

route.get('/byRating',validate(getAllMoviesRatingType),getAllMoviesRating )


export default route;