import axios from 'axios';

const api = 'https://acme-users-api-rev.herokuapp.com/';

const fetchUsers = async (idx) => {

    return await axios.get(`${api}/api/users/${!!idx ? idx : ''}`)
}

export { fetchUsers };
