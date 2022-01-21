import React from 'react';

const List = ({person}) => {

  const  {id, name, age, image} = person;

  return (
    <article key={id} className='person'>
      <img src={image} alt={name}></img>
      <div>
        <h4>{name}</h4>
        <p>{age} Years</p>
      </div>
    </article>
  );
};

export default List;
