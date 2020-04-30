import React from 'react';

// comps
import Login from '../../Login';
import ChildComps from './ChildComps';

// helper
import verifyVisit from 'Utils/LogIn/verifyVisit';

export default function Components(props) {
  return verifyVisit() ? <ChildComps /> : <Login />;
}
