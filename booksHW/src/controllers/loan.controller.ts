import { prisma } from '../../../booksHW/src/config/db';
import { Request, Response } from 'express';


export const createLoan = async (req: Request, res: Response) => {
    const loan = req.body;
    try {
      const checkUser = await prisma.user.findFirst({
        where:{
          id:{
            equals:loan.userId
          }
        }
      })

      const checkBook = await prisma.books.findFirst({
        where:{
          id:{
            equals:loan.bookId
          }
        }
      })
      
      if(checkBook && checkUser){
        const newLoan = await prisma.loan.create({
          data: loan,
        });
        if (newLoan) {
          res.json(newLoan);
        } else {
          res.json('Sorry something went wrong , please try again');
        }
      } else {
        res.status(400).json({message:'userId or bookId not found'})
      }
      
      
    } catch (error) {
      res.json(error);
    }
  };

  export const getLoans = async (req: Request, res: Response) => {
    try {
      const loans = await prisma.loan.findMany({
        select:{
          book:true,
          user:true,
        }
      });
      if (loans) {
        res.json(loans);
      } else {
        res.status(404).json('Sorry loans not found');
      }
    } catch (error) {
      res.json(error);
    }
  };

  export const getLendedBooks = async (req: Request, res: Response) => {
    try {
      const lendedBooks = await prisma.loan.findMany({
        select:{
          book:true,
        }
      });
      if (lendedBooks) {
        res.json(lendedBooks);
      } else {
        res.status(404).json('Sorry lended Books not found');
      }
    } catch (error) {
      res.json(error);
    }
  };