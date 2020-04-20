import React from 'react';
import { MDBIcon, MDBSideNavLink } from 'mdbreact';

export default function SideNavList(props) {
  const { links } = props;

  return links.map((link, key) => {
    const { icon, text } = link;
    return (
      <MDBSideNavLink
        topLevel
        key={key}
        shortcut={<MDBIcon icon={icon} />}
        className="text-capitalize font-weight-bold">
        {text}
      </MDBSideNavLink>
    );
  });
}
