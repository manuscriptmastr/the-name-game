import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

let PersonItem = ({ person: { jobTitle, headshot, firstName, lastName } }) =>
  <Link to="#" className="person" >
    <img className="person__img" src={headshot.url} alt={`${firstName} ${lastName}`} />
    <h2 className="person__hint" >{jobTitle}</h2>
  </Link>

export default PersonItem;