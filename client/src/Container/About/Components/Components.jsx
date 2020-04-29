import React, { Fragment } from 'react';
import { MDBRow, MDBCol, MDBAnimation } from 'mdbreact';

import Img from 'Components/Img/Img.jsx';
import aboutImg from 'Imgs/about.jpg';

function TextInfo(props) {
  const { title, info } = props.aboutInfo;
  return (
    <Fragment>
      <MDBCol size="12" sm="8">
        <MDBAnimation type="fadeIn" duration="1000ms" delay="1s">
          <h1 className="clr__header1 pink-text">{title}</h1>
          <p className="clr__p">{info}</p>
        </MDBAnimation>
      </MDBCol>
      <MDBCol size="12" sm="4" className="mt-sm-5 d-none d-sm-block">
        <MDBAnimation type="fadeInRight" duration="1000ms">
          <Img src={aboutImg} alt="Chelsea Lynn Russell Image" />
        </MDBAnimation>
      </MDBCol>
    </Fragment>
  );
}

export default function Components(props) {
  console.log({ props });
  return (
    <MDBRow>
      <TextInfo {...props} />
    </MDBRow>
  );
}
