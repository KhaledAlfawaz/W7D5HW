import { prisma } from '../../../usersHW/src/config/db';
import { Request, Response } from 'express';
import { Role } from '@prisma/client';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        age: true,
        joiningYear: true,
        role: true,
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

export const getOneUser = async (req: Request, res: Response) => {
  const id = req.body.id;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
      select: {
        username: true,
        email: true,
        age: true,
        joiningYear: true,
        role: true,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json('Sorry user not found');
    }
  } catch (error) {
    res.json(error);
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  const email = req.body.email;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
      select: {
        username: true,
        email: true,
        age: true,
        joiningYear: true,
        role: true,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json('Sorry user not found');
    }
  } catch (error) {
    res.json(error);
  }
};

export const getOlderUser = async (req: Request, res: Response) => {
  const age = req.body.age;
  try {
    const user = await prisma.user.findMany({
      where: {
        age: {
          gt: age,
        },
      },
      select: {
        username: true,
        email: true,
        age: true,
        joiningYear: true,
        role: true,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json('Sorry users not found');
    }
  } catch (error) {
    res.json(error);
  }
};

export const roleCount = async (req: Request, res: Response) => {
  const role = req.body.role;
  try {
    const users = await prisma.user.findMany({
      where: {
        role: role,
      },
    });
    if (users) {
      res.json(users.length);
    } else {
      res.status(404).json('Sorry no users in this role');
    }
  } catch (error) {
    res.json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    if (user) {
      res.json({
        message: `weclome back ${username}`,
      });
    } else {
      res.json({
        message: 'wrong username or password',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = async (req: Request, res: Response) => {
  const newPassword = req.body.password;
  const id = req.body.id;
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: newPassword,
      },
    });
    if (user) {
      res.json(`${user.username} password has changed successfully`);
    } else {
      res.json('Sorry something went wrong , please try again');
    }
  } catch (error) {
    console.log(error);
  }
};

export const joinThisYear = async (req: Request, res: Response) => {
  const year = req.body.joiningYear;
  const id = req.body.id;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
        joiningYear: year
      },
    });
    if (user) {
      res.json(`${user.username} joined this year !`);
    } else {
      res.json(`not joined this year`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAlljoinThisYear = async (req: Request, res: Response) => {
  const year = req.body.joiningYear;
  try {
    const users = await prisma.user.findMany({
      where: {
        joiningYear: {
          gte: year,
        },
      },
      select: {
        id: true,
        username: true,
        email: true,
        age: true,
        joiningYear: true,
        role: true,
      },
    });
    if (users) {
      res.json(users);
    } else {
      res.json('no one joined this year');
    }
  } catch (error) {
    console.log(error);
  }
};
