import React from 'react';
import { MDBFooter, MDBContainer } from 'mdbreact';

export default function Footer(props) {
  return (
    <MDBFooter color="pink lighten-3">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{' '}
          <a href="https://www.MDBootstrap.com"> Chelsea Lynn Russell </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
