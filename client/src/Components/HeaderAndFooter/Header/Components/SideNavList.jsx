import React from 'react';
import { MDBIcon, MDBSideNavLink } from 'mdbreact';

export default function SideNavList(props) {
  const { links } = props;

  return links.map((link, key) => {
    const { icon, text, linkTo } = link;
    return (
      <MDBSideNavLink
        topLevel
        key={key}
        shortcut={<MDBIcon icon={icon} />}
        to={linkTo}
        className="text-capitalize font-weight-bold">
        {text}
      </MDBSideNavLink>
    );
  });
}
