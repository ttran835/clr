import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

/* Components */

// Header and Footer
import Header from '../../Components/HeaderAndFooter/Header';
import Footer from '../../Components/HeaderAndFooter/Footer';

// Login
import Login from '../Login';
import About from '../About';
import Mems from '../Mems';

export default function Components(props) {
  return (
    <Fragment>
      <Route path="/">
        <Header />
      </Route>
      <div className="content-wrapper">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/memories">
            <Mems />
          </Route>
        </Switch>
      </div>
      <Route path="/">
        <Footer />
      </Route>
    </Fragment>
  );
}
