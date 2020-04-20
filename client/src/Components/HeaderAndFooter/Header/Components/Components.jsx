import React, { Fragment } from 'react';
import SideNav from './SideNav';

export default function Components(props) {
  return (
    <Fragment>
      <SideNav {...props} />
    </Fragment>
  );
}
