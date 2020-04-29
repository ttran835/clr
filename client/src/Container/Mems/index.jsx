import React, { Fragment, useState, useEffect } from 'react';
import { MDBContainer } from 'mdbreact';
import initialState from './state';
import Components from './Components/Components';
import actions from './actions';
import { Helmet } from 'react-helmet';

export default function Memories(props) {
  const [state, setState] = useState(initialState);

  const dispatch = (action, ...args) => {
    return () => action(setState, state, ...args);
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Memories</title>
      </Helmet>
      <MDBContainer>
        <Components state={state} dispatch={dispatch} actions={actions} />
      </MDBContainer>
    </Fragment>
  );
}
