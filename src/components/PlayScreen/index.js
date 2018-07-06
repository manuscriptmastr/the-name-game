import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { updateAll as updatePersons } from '../../actions/person';
import { getAll as getPersons } from '../../api/person';
import { pipe } from '../../lib/utility';
import { limit, shuffle } from '../../lib/array';
import Layout from '../Layout';
import PersonList from '../Person/List';

let PlayScreen = ({ persons }) =>
  <Layout>
    <PersonList persons={persons} />
  </Layout>

let mapStateToProps = ({ persons, url }) => ({
  persons: pipe(shuffle, limit(5))(persons),
  url
});

let mapDispatchToProps = {
  updatePersons
}

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    updatePersons: ({ updatePersons, url }) => async () => {
      let persons = await getPersons(url);
      updatePersons(persons);
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.updatePersons();
    }
  })
);

export default enhance(PlayScreen);