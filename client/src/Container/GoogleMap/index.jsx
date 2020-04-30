import React, { useState } from 'react';
import Components from './Components/Components';
import actions from './actions';
import initializeState from './state';

export default function GoogleMap(props) {
  const [state, setState] = useState(initializeState);

  const dispatch = (action, ...args) => {
    return () => action(setState, state, ...args);
  };

  return <Components state={state} dispatch={dispatch} actions={actions} />;
}
