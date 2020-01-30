import React, { useState, useEffect } from 'react';
import { fetchUsers } from './Fetch';
import Pager from './Pager';

const Users = ({params}) => {
  const [users, setUsers] = useState([]);
  const [allUsersCount, setAllUsersCount] = useState(0); //?????? need state here?

  useEffect(() => {
    fetchUsers(params.idx)
      .then(response => {
        setAllUsersCount(response.count);
        setUsers(response.users)
      });
  }, [params.idx]);

  console.log(params)

  return (
    <div>
      <h1>Users</h1>
      <Pager allUsersCount={allUsersCount} />
      <ul>
        {users.map((user, idx) => {
          return <li key={idx}>{user.fullName}</li>
      })}
      </ul>
    </div>  
  )
}

export default Users;