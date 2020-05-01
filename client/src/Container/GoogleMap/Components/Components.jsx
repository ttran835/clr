import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import Map from './Map';
import IntroParagraph from 'Components/IntroParagraph';

const introP =
  'These are the trips that we have taken together. I look forward to more adventures with you!';

export default function Components(props) {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="12">
          <h1 className="clr__header1 pink-text text-capitalize">Places we visited</h1>
          <IntroParagraph text={introP} />
        </MDBCol>
        <MDBCol size="12">
          <Map {...props} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
