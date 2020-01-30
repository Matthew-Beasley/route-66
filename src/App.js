import React, { useEffect, useState } from 'react';
import qs from 'qs';
import Nav from './Nav';
import Home from './Home';
import Users from './Users';


function App() {
  const getHash = () => { return window.location.hash.slice(1) }

  const [params, setParams] = useState(qs.parse(getHash()));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    })
  }, []);

  console.log(params)

  return (
    <div className="App">
      <Nav params={params} />
      {params.view === '' && <Home />}
      {params.view === 'users' && <Users params={params} />}
    </div>
  );
}

export default App;
