import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components

import Header from '../Header/index';

export default function Components(props) {
  return (
    <Switch>
      <Route path="/hello">
        <Header />
      </Route>
    </Switch>
  );
}
