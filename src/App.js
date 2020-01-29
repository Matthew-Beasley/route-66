import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Users from './Users';
import { fetchUsers } from './Fetch';


function App() {

  let allUserCount = 0;
  const [users, setUsers] = useState([])
  const [allUsersCount, setAllUsersCount] = useState(0);

  useEffect(() => {
    fetchUsers()
      .then(response => {
        setAllUsersCount(response.count);
        setUsers(response.users)
        console.log(response)
      });
  },[])

  console.log(users)
  console.log(allUsersCount)

  return (
    <div className="App">
      <nav>
        <a href={`#/home`} >Home</a>
        <a href={`#/users`}>Users</a>
      </nav>
      
    </div>
  );
}

export default App;
