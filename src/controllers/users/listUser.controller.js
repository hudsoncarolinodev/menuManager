import listUserService from '../../services/users/listUser.service'

export default function listUsersControllers(req, res){
    
    const users = listUserService()

    return res.status(201).json(users)
}