import createPlatesService from '../services/plates/createPlates.services'

export default function createPlates(req, res){
     
    const plate = createPlatesService(req.body)

    return res.status(201).json(plate)
}