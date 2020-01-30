import React, { useEffect, useState, useReducer } from 'react';
import { fetchUser } from './Fetch';

const Detail = ({params}) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser(params.userid)
      .then(response => setUser(response))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h2>{user.fullName}</h2>
      <p>{user.email}</p>
      <p>{user.title}</p>
      <p>{user.bio}</p>
    </div>
  )
}

export default Detail;