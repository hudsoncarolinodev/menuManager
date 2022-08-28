import databasePlates from '../../database/databasePlates'
import {v4 as uuidv4} from 'uuid'

export default function createPlatesService(data){

    const {name, descricao, preco, foto} = data
    
    const newPlate = {
        id:uuidv4(),
        name, 
        descricao, 
        preco, 
        foto
    }

    const platesAlreadyExists =  databasePlates.find((plate) => plate.id === newPlate.id)

    if(platesAlreadyExists){
        return "This plate is already exists"
    }
    
    databasePlates.push(newPlate)
    
    return newPlate
}