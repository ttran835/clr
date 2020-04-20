import React from 'react';
import ContextCreator from 'Utils/ContextCreator';
import initialState from './state';
import Components from './Components/Components';
import actions from './actions';

export default function Login(props) {
  const context = new ContextCreator(initialState);
  const { Context, createStateAndSetState } = context;
  const { state, dispatch, onChangeDispatch } = createStateAndSetState();

  return (
    <Context.Provider value={{ state, dispatch, onChangeDispatch, actions }}>
      <Context.Consumer>
        {(values) => {
          return <Components {...values} />;
        }}
      </Context.Consumer>
    </Context.Provider>
  );
}
