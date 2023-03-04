import {getBooks , createBook} from '../controllers/book.controller'
import express from 'express';
import validate from '../middleware/validate'
import { createBookType} from '../zod.schema/zod.book'

const route = express.Router();

route.get('/' , getBooks);

route.post('/' ,validate(createBookType) ,createBook);

export default route