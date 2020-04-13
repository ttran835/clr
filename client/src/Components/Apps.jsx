import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Helmet from 'react-helmet';
import test from 'Utils/test';

export default function Apps(props) {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBBtn onClick={test.testFunc} outline color="dark">
            Jesus, I have finally gotten this shit to work.
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
