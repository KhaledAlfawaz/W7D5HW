import {createLoan , getLoans ,getLendedBooks} from '../controllers/loan.controller'
import express from 'express';
import validate from '../middleware/validate'
import { createLoanType} from '../zod.schema/zod.loan'
const route = express.Router();

route.get('/' , getLoans);

route.get('/books' , getLendedBooks);


route.post('/' ,validate(createLoanType), createLoan);

export default route