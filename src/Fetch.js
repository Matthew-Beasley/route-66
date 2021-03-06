import axios from 'axios';

const api = 'https://acme-users-api-rev.herokuapp.com/';

const fetchUsers = (idx) => {
    return axios.get(`${api}api/users/${!!idx ? idx : ''}`)
        .then( response => response.data)
}

const fetchUser = (userId) => {
    return axios.get(`${api}api/users/detail/${userId}`)
        .then(response => response.data)
}

export { fetchUsers, fetchUser };

