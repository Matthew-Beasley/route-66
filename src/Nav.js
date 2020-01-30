import React from 'react';

const Nav = ({ params, idx }) => {
  return (
    <nav>
      <a href={'#view='} className={params.view === '/' ? 'selected' : ''}>Home</a>
      <a href={`#view=users&idx=${idx}`} className={params.view === 'users' ? 'selected' : ''}>Users</a>
    </nav>
  )
}

export default Nav;