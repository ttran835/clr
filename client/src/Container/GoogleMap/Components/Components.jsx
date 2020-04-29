import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import Map from './Map';

export default function Components(props) {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <Map {...props} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
