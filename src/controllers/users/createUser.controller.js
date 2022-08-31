import createUserService from '../../services/users/createUser.service'

const createUserController = async (req, res) => {
    
    const {name, email, password} = req.body

    const user = await createUserService(name, email, password)

    return res.status(201).json(user)
}

export default createUserController