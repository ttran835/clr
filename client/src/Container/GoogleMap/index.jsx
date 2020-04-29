import React, { useState } from 'react';
import Components from './Components/Components';
import ContextCreator from 'Utils/ContextCreator';
import actions from './actions';

const { initializeState } = require('./state');

export default function GoogleMap(props) {
  const [state, setState] = useState(initializeState);

  console.log({ state });
  const dispatch = (action, ...args) => {
    return () => action(setState, state, ...args);
  };

  return <Components state={state} dispatch={dispatch} actions={actions} />;
}
