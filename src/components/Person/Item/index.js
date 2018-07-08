import React from 'react';
import './styles.css';
import { compose, withProps, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { submit as submitResult } from '../../../actions/result';

let PersonItem = ({ person: { jobTitle, headshot, firstName, lastName }, hints, statusColor, hasClicked, onClick }) =>
  <div className={`person ${hasClicked && 'person--' + statusColor }`} onClick={onClick} >
    <img className="person__img" src={headshot.url} alt={`${firstName} ${lastName}`} />
    {hints && <h2 className="person__hint" >{jobTitle}</h2>}
  </div>

let mapStateToProps = ({ question, settings: { hints } }) => ({ question, hints });

let mapDispatchToProps = {
  submitResult
};

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withProps(({ question, person }) => ({ isCorrect: person.id === question, statusColor: person.id === question ? 'green' : 'red' })),
  withState('hasClicked', 'setClicked', false),
  withHandlers({
    onClick: ({ setClicked, isCorrect, submitResult }) => () => {
      setClicked(true);
      submitResult(isCorrect);
    }
  })
);

export default enhance(PersonItem);