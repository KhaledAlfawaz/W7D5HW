import {
  changePassword,
  createUser,
  getAllUsers,
  getAlljoinThisYear,
  getOlderUser,
  getOneUser,
  getUserByEmail,
  joinThisYear,
  login,
  roleCount,
} from '../controllers/user.controller';
import express from 'express';
import validate from '../../../usersHW/src/middleware/validate';
import {
  getAlljoinThisYearType,
  joinThisYearType,
  changePasswordType,
  loginType,
  roleCountType,
  getOlderUserType,
  getUserByEmailType,
  getOneUserType,
  createUserType,
} from '../zod.schema/zod.user';

const route = express.Router();

route.get('/', getAllUsers);

route.get('/getUser',validate(getOneUserType), getOneUser);

route.get('/byEmail',validate(getUserByEmailType), getUserByEmail);

route.get('/olderUsers',validate(getOlderUserType), getOlderUser);

route.get('/roleCount',validate(roleCountType), roleCount);

route.get('/login',validate(loginType), login);

route.get('/joinThisYear',validate(joinThisYearType), joinThisYear);

route.get('/AlljoinThisYear', validate(getAlljoinThisYearType),getAlljoinThisYear);

route.put('/',validate(changePasswordType), changePassword);

route.post('/', validate(createUserType),createUser);

export default route;
