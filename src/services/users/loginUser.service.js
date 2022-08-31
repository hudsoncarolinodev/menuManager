import users from "./../../database/users/database"
import  jwt  from "jsonwebtoken"
import * as bcrypt from 'bcryptjs/dist/bcrypt'

const userLoginService = (email, password) => {
    
    const user =  users.find((user)=> user.email === email)

    if(!user){
        return "Invalid email or password"
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if(!passwordMatch){
        return "Invalid email or password"
    }

    const token = jwt.sign({email: email}, "SECRET_KEY", {expiresIn: "24h"})

    return token
}

export default userLoginService