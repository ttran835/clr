import React from 'react';
import {
  MDBIcon,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBSideNavLink,
  MDBContainer,
} from 'mdbreact';
import actions from '../actions';

export default function SideNav(props) {
  const { isOpen, links } = props.state;
  const { handleToggle } = actions;
  return (
    <MDBContainer>
      <MDBSideNav
        slim
        fixed
        mask="rgba-pink-light"
        triggerOpening={isOpen}
        breakWidth={1300}
        className="sn-bg-1">
        <li>
          <div className="logo-wrapper sn-ad-avatar-wrapper">
            <a href="#!">
              <img
                alt=""
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                className="rounded-circle"
              />
              <span>Anna Deynah</span>
            </a>
          </div>
        </li>

        <MDBSideNavNav>
          <MDBSideNavLink to="/other-page" topLevel>
            <MDBIcon icon="pencil-alt" className="mr-2" />
            Submit listing
          </MDBSideNavLink>
          <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
            <MDBSideNavLink>Submit listing</MDBSideNavLink>
            <MDBSideNavLink>Registration form</MDBSideNavLink>
          </MDBSideNavCat>
          <MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">
            <MDBSideNavLink>For bloggers</MDBSideNavLink>
            <MDBSideNavLink>For authors</MDBSideNavLink>
          </MDBSideNavCat>
          <MDBSideNavCat name="About" id="about" icon="eye">
            <MDBSideNavLink>Instruction</MDBSideNavLink>
            <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
          </MDBSideNavCat>
          <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
            <MDBSideNavLink>FAQ</MDBSideNavLink>
            <MDBSideNavLink>Write a message</MDBSideNavLink>
          </MDBSideNavCat>
        </MDBSideNavNav>
      </MDBSideNav>
    </MDBContainer>
  );
}
