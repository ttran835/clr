import React, { useState, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Components from './Components/Components';
import actions from './actions';
import initializeState from './state';

export default function GoogleMap(props) {
  const [state, setState] = useState(initializeState);

  const dispatch = (action, ...args) => {
    return () => action(setState, state, ...args);
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Places we visited</title>
      </Helmet>
      <Components state={state} dispatch={dispatch} actions={actions} />
    </Fragment>
  );
}
