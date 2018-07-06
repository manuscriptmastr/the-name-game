import React from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import PersonList from '../Person/List';

let PlayScreen = ({ persons }) =>
  <Layout>
    <PersonList persons={persons} />
  </Layout>

let mapStateToProps = ({ persons }) => ({ persons });

export default connect(mapStateToProps)(PlayScreen);