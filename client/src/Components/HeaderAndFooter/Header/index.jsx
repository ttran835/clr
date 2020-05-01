import React from 'react';
import Components from './Components/Components';
import ContextCreator from 'Utils/ContextCreator';
import initialState from './state';

export default function Header(props) {
  const context = new ContextCreator(initialState);
  const { Context, createStateAndSetState } = context;

  const { state, dispatch } = createStateAndSetState();

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Context.Consumer>
        {(values) => {
          return <Components {...values} />;
        }}
      </Context.Consumer>
    </Context.Provider>
  );
}
