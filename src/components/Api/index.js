import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { updateAll as updatePersons } from '../../actions/person';
import { resetAll as resetAnswers } from '../../actions/answer';
import { getAll as getPersons } from '../../api/person';

let Api = ({ children }) =>
  <Fragment>
    {children}
  </Fragment>

let mapStateToProps = ({ url }) => ({ url });

let mapDispatchToProps = {
  updatePersons,
  resetAnswers
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
      this.props.resetAnswers();
    }
  })
);

export default enhance(Api);