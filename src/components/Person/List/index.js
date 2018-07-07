import React from 'react';
import './styles.css';
import PersonItem from '../Item';

let PersonList = ({ persons }) =>
  <ul className="persons__list" >
    {persons.map((person) =>
      <li className="persons__item" key={person.id}>
        <PersonItem person={person} />
      </li>
    )}
  </ul>

export default PersonList;