import listPlatesService from '../../services/plates/listPlates.service'

export default function listPlates(req, res){
    
    const plates = listPlatesService()

    return res.status(201).json(plates)
}