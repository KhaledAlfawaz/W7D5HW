import { prisma } from '../config/db';
import { Request, Response } from 'express';
import { Genre } from '@prisma/client';

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await prisma.movie.findMany();
    if (movies) {
      res.json(movies);
    } else {
      res.status(404).json('Sorry movies not found');
    }
  } catch (error) {
    res.json(error);
  }
};

export const createMovie = async (req: Request, res: Response) => {
  const newMovie = req.body;

  try {
    const movie = await prisma.movie.create({
      data: newMovie,
    });
    if (movie) {
      res.json(movie);
    } else {
      res.json('Sorry something went wrong , please try again');
    }
  } catch (error) {
    res.json(error);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const  id  = req.body.id;
  const newMovie = req.body;

  try {
    const movie = await prisma.movie.update({
      where: {
        id: id,
      },
      data: newMovie,
    });
    if (movie) {
      res.json(movie);
    } else {
      res.json('Sorry something went wrong , please try again');
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const id  = req.body.id;

  try {
    const movie = await prisma.movie.delete({
      where: {
        id: id,
      },
    });
    if (movie) {
      res.json(`movie:${movie.name} deleted successfully`);
    } else {
      res.json('Sorry something went wrong , please try again');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByName = async (req: Request, res: Response) => {
  const name = req.body.name;
  try {
    const movie = await prisma.movie.findFirst({
      where: {
        name: name,
      },
    });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json('Sorry movie not found');
    }
  } catch (error) {
    res.json(error);
  }
};

export const getAllMoviesGenre = async (req: Request, res: Response) => {
  const genre = req.body.genre;
  try {
    const movies = await prisma.movie.findMany({
      where: {
        genre: genre as Genre,
      },
    });
    if (movies) {
      res.json(movies);
    } else {
      res.status(404).json('Sorry movies not found');
    }
  } catch (error) {
    res.json(error);
  }
};

export const getAllMoviesRating = async (req: Request, res: Response) => {
  const ratingNum = req.body.rating;
  try {
    const movies = await prisma.movie.findMany({
      where: {
        rating: {
          gt: ratingNum,
        },
      },
    });
    if (movies) {
      res.json(movies);
    } else {
      res.status(404).json('Sorry movies not found');
    }
  } catch (error) {
    res.json(error);
  }
};
