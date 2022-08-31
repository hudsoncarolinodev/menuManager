import {Router} from 'express'
import createUser from '../controllers/users/createUser.controller'
import listUsers from './../controllers/users/listUser.controller'
const usersRouter = Router()

usersRouter.post('', createUser);
usersRouter.get('', listUsers);

export default usersRouter