import {Router} from 'express'
import createPlates from '../controllers/createPlates.controller'
import listPlates from '../controllers/listPlates.controller'

const platesRouter = Router()

//platesRouter.get('/plates',existsPlates ,createPlates);

platesRouter.get('', listPlates);
platesRouter.post('', createPlates);

export default platesRouter