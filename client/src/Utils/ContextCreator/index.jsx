import { createContext, useState, useContext } from 'react';

/**
 * @classdesc Create context for components index
 * @param {Object} initialState
 * @return {Object} returns with initial state for Component
 */

export default class ContextCreator {
  constructor(initialState) {
    this.state = initialState;
    this.Context = createContext(this.state);
  }

  createStateAndSetState = () => {
    const context = useContext(this.Context);
    const [state, setState] = useState(context);

    const dispatch = (action, ...args) => {
      return () => action(setState, state, ...args);
    };

    return { state, dispatch };
  };
}
