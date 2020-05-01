import React from 'react';
import { MDBContainer } from 'mdbreact';
import { Helmet } from 'react-helmet';
import Components from './Components/Components';
import aboutInfo from './aboutInfo';

export default function About(props) {
  return (
    <MDBContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Chelsea</title>
      </Helmet>
      <Components aboutInfo={aboutInfo} />
    </MDBContainer>
  );
}
