import React from 'react';
import './styles.css';
import { compose, withProps, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';

let PersonItem = ({ person: { jobTitle, headshot, firstName, lastName }, statusColor, hasClicked, onClick }) =>
  <div className={`person ${hasClicked && 'person--' + statusColor }`} onClick={onClick} >
    <img className="person__img" src={headshot.url} alt={`${firstName} ${lastName}`} />
    <h2 className="person__hint" >{jobTitle}</h2>
  </div>

let mapStateToProps = ({ question }) => ({ question });

let enhance = compose(
  connect(mapStateToProps),
  withProps(({ question, person }) => ({ isCorrect: person.id === question, statusColor: person.id === question ? 'green' : 'red' })),
  withState('hasClicked', 'setClicked', false),
  withHandlers({
    onClick: ({ setClicked }) => () => setClicked(true)
  })
);

export default enhance(PersonItem);