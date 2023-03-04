import { prisma } from '../../../booksHW/src/config/db';
import { Request, Response } from 'express';


export const createBook = async (req: Request, res: Response) => {
    const book = req.body;
    try {
      const newBook = await prisma.books.create({
        data: book,
      });
      if (newBook) {
        res.json(newBook);
      } else {
        res.json('Sorry something went wrong , please try again');
      }
    } catch (error) {
      res.json(error);
    }
  };

  export const getBooks = async (req: Request, res: Response) => {
    try {
      const books = await prisma.books.findMany({
        select: {
          id: true,
          name: true,
          genre:true,
          users:{
            select:{
              user:true
            }
          }
        },
      });
      if (books) {
        res.json(books);
      } else {
        res.status(404).json('Sorry books not found');
      }
    } catch (error) {
      res.json(error);
    }
  };