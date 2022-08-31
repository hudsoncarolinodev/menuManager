import createPlatesService from '../../services/plates/createPlates.service'

export default function createPlates(req, res){
     
    const plate = createPlatesService(req.body)

    return res.status(201).json(plate)
}