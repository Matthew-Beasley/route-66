import React from 'react';


const Pager = ({ allUsersCount }) => {

  const pageCount = Math.ceil(allUsersCount / 50);

  let links = [];
  for (let i = 0; i < pageCount; i++) {
      links.push(`#view=users&idx=${i}`);
  }

  return (
    <div className="pager-links">
      {links.map((link, idx) => {
        return <div key={idx + 1}>
          <a href={link}>{idx + 1}</a>
      </div>
      })}
    </div>
  )
}

export default Pager;