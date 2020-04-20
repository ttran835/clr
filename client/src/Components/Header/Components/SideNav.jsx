import React from 'react';
import { MDBIcon, MDBSideNavNav, MDBSideNav, MDBContainer } from 'mdbreact';
import SideNavList from './SideNavList';
import actions from '../actions';

import clrIcon from '../../../imgs/clr.jpg';

export default function SideNav(props) {
  const { isOpen, links } = props.state;
  return (
    <MDBContainer>
      <MDBSideNav
        slim
        fixed
        mask="rgba-pink-light"
        triggerOpening={isOpen}
        breakWidth={1}
        className="sn-bg-1">
        <li>
          <div className="logo-wrapper sn-ad-avatar-wrapper">
            <a href="#!">
              <img alt="" src={clrIcon} className="rounded-circle" />
              <span>Chelsea L Russell</span>
            </a>
          </div>
        </li>

        <MDBSideNavNav>
          <SideNavList links={links} />
        </MDBSideNavNav>
      </MDBSideNav>
    </MDBContainer>
  );
}
