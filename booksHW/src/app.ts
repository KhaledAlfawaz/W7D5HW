import express , {Request , Response , Application} from 'express'
import userRoute from './routes/user.route'
import bookRoute from './routes/book.route'
import loanRoute from './routes/loan.route'




import {connectDB}  from './config/db'


const app:Application = express()
const port:number = 3000

app.use(express.json())

connectDB()

app.use('/user' , userRoute)
app.use('/book' , bookRoute)
app.use('/loan' , loanRoute)




app.listen(port , ()=> {
    console.log(`Express running on port:${port}`);
})