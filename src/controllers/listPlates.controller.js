import listPlatesServices from '../services/plates/listPlates.services'

export default function listPlates(req, res){
    
    const plates = listPlatesServices()

    return res.status(201).json(plates)
}