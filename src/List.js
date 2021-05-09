import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      {repos.map((repo) => {
        return (
            <li key={repo.id} className='list'>
            <span >{repo.name} </span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;