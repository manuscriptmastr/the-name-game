import React from 'react';

let PersonItem = ({ person: { jobTitle, headshot } }) =>
  <div className="person" >
    <img className="person__img" src={headshot.url} />
    <h2 className="person__content" >{jobTitle}</h2>
  </div>

export default PersonItem;