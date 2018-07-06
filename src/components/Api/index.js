import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { updateAll as updatePersons } from '../../actions/person';
import { getAll as getPersons } from '../../api/person';

let Api = ({ children }) =>
  <Fragment>
    {children}
  </Fragment>

let mapStateToProps = ({ url }) => ({ url });

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

export default enhance(Api);