import { useParams } from 'react-router-dom'
import api from './api'

const UsersService = {
    register: (params) => api.post('/user/register', params),
    getUser: (id) => api.get(`/user/${id}`)
}

export default UsersService