import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

/* Components */

// Header and Footer
import Header from '../HeaderAndFooter/Header';
import Footer from '../HeaderAndFooter/Footer';

// Login
import Login from '../Login';

export default function Components(props) {
  return (
    <Fragment>
      <Route path="/">
        <Header />
      </Route>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
      <Route path="/">
        <Footer />
      </Route>
    </Fragment>
  );
}
