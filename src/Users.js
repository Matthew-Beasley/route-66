import React, { useState, useEffect } from 'react';
import { fetchUsers } from './Fetch';
import Pager from './Pager';

const Users = ({params, setIdx, idx}) => {
  const [users, setUsers] = useState([]);
  const [allUsersCount, setAllUsersCount] = useState(0); //?????? need state here?

  useEffect(() => {
    if (!params.idx) {
      params.idx = idx;
    }
    else {
      setIdx(params.idx);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    fetchUsers(params.idx)
      .then(response => {
        setAllUsersCount(response.count);
        setUsers(response.users)
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.idx]);

  return (
    <div>
      <h1>Users</h1>
      <Pager allUsersCount={allUsersCount} />
      <ul>
        {users.map((user, idx) => {
          return <li key={idx}><a href={`#view=detail&userid=${user.id}`}>{user.fullName}</a></li>
      })}
      </ul>
    </div>  
  )
}

export default Users;