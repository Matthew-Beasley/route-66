import React, { useEffect, useState } from 'react';
import qs from 'qs';
import Nav from './Nav';
import Home from './Home';
import Users from './Users';
import Detail from './Detail';


function App() {
  const getHash = () => { return window.location.hash.slice(1) }
  const [params, setParams] = useState(qs.parse(getHash()));
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    })
  }, []);

  console.log(params)

  return (
    <div className="App">
      <Nav params={params} idx={idx} />
      {params.view === '' && <Home />}
      {params.view === 'users' && <Users params={params} idx={idx} setIdx={setIdx} />}
      {params.view === 'detail' && <Detail params={params} />}
    </div>
  );
}

export default App;
