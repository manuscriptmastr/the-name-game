import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { pipe } from '../../lib/utility';
import { limit, shuffle, current } from '../../lib/array';
import Layout from '../Layout';
import PersonList from '../Person/List';

let PlayScreen = ({ persons, currentPerson }) =>
  <Layout>
    <h1>Who is {currentPerson.firstName} {currentPerson.lastName}?</h1>
    <PersonList persons={persons} />
  </Layout>

let mapStateToProps = ({ persons, url }) => ({
  persons: pipe(current, shuffle, limit(5))(persons),
  currentPerson: persons[0],
  url
});

let enhance = compose(
  connect(mapStateToProps)
);

export default enhance(PlayScreen);