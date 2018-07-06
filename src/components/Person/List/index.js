import React from 'react';
import PersonItem from '../Item';

let PersonList = ({ persons }) =>
  <ul>
    {persons.map((person) =>
      <li key={person.id}>
        <PersonItem person={person} />
      </li>
    )}
  </ul>

export default PersonList;