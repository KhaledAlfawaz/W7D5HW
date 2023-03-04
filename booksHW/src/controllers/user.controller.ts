import { prisma } from '../../../booksHW/src/config/db';
import { Request, Response } from 'express';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        books:{
          select:{
            book:true,
          }
        }
      },
    });
    if (users) {
      res.json(users);
    } else {
      res.status(404).json('Sorry users not found');
    }
  } catch (error) {
    res.json(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const newUser = await prisma.user.create({
      data: user,
    });
    if (newUser) {
      res.json(newUser);
    } else {
      res.json('Sorry something went wrong , please try again');
    }
  } catch (error) {
    res.json(error);
  }
};