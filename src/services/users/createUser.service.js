import users from "./../../database/users/database"
import {v4 as uuidv4} from 'uuid'
import * as bcrypt from 'bcryptjs/dist/bcrypt'

const createUserService = async (name, email, password) => {

    const userAlreadyExists = users.find((user) => user.email === email)

    if(userAlreadyExists){

        return "This Email adress is already being used"

    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
        name,
        email,
        password:hashedPassword,
        id:uuidv4()
    }

    users.push(newUser)

    return newUser
}

export default createUserService