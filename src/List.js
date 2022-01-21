import React from 'react';
import {FaWindowClose} from 'react-icons/fa';
const List = ({person}) => {

  const  {id, name, age, image} = person;

  return (
    <article key={id} className='person'>

        <img src={image} alt={name}></img>
        <div>
          <div>
            <h4>{name}</h4>
            <p>{age} Years</p>
          </div>
          <div>
            <FaWindowClose style={{float:"right"}}/>
          </div>
        </div>
      
      
    </article>
  );
};

export default List;
