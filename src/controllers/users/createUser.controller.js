import createUserService from '../../services/users/createUser.service'

const createUserController = (req, res) => {
    
    const {name, email, password} = req.body

    const user = createUserService(name, email, password)

    return res.status(201).json(user)
}

export default createUserController