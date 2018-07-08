import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { resetAll as resetAnswers } from '../../actions/answer';
import Layout from '../Layout';
import PersonList from '../Person/List';

let PlayScreen = ({ persons, currentPerson: { firstName, lastName }, resetAnswers }) =>
  <Layout>
    <h1 className="play__question" >Who is {firstName} {lastName}?</h1>
    <PersonList persons={persons} />
    <button className="play__reset" onClick={resetAnswers} >Reset</button>
  </Layout>

let mapStateToProps = ({ allPersons, question, answers }) => ({
  persons: allPersons.filter(p => answers.includes(p.id)),
  currentPerson: allPersons.find(p => question === p.id)
});

let mapDispatchToProps = {
  resetAnswers
}

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(PlayScreen);