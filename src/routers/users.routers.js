import {Router} from 'express'
import createUser from '../controllers/users/createUser.controller'
import listUsers from './../controllers/users/listUser.controller'
import userLogin from './../controllers/users/userLogin.controller'

const usersRouter = Router()

usersRouter.post('', createUser);
usersRouter.get('', listUsers);
usersRouter.post('/login', userLogin);

export default usersRouter