import React from 'react';

let PersonItem = ({ person: { jobTitle, headshot, firstName, lastName } }) =>
  <div className="person" >
    <img className="person__img" src={headshot.url} alt={`${firstName} ${lastName}`} />
    <h2 className="person__content" >{jobTitle}</h2>
  </div>

export default PersonItem;