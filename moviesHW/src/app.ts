import express , {Request , Response , Application} from 'express'
import movieRoute from './routes/movie.route'


import {connectDB}  from './config/db'


const app:Application = express()
const port:number = 3000

app.use(express.json())

connectDB()

app.use('/movie' ,movieRoute)



app.listen(port , ()=> {
    console.log(`Express running on port:${port}`);
})