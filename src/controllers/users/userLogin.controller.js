import loginUserService from '../../services/users/loginUser.service'

export default function userLoginController(req, res){
    
    const {email, password} = req.body

    const userLogin = loginUserService(email, password)

    return res.status(201).json(userLogin)
}