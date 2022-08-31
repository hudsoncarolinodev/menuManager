import users from "./../../database/users/database"
import {v4 as uuidv4} from 'uuid'

const createUserService = (name, email, password) => {

    const userAlreadyExists = users.find((user) => user.email === email)

    if(userAlreadyExists){

        return "This Email adress is already being used"

    }

    const newUser = {
        name,
        email,
        password,
        id:uuidv4()
    }

    users.push(newUser)

    return newUser
}

export default createUserService