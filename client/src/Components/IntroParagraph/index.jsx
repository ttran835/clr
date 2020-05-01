import React from 'react';
import { MDBAnimation } from 'mdbreact';

export default function IntroParagraph(props) {
  const { text } = props;
  return (
    <MDBAnimation type="fadeIn" duration="2000ms">
      <p className="clr__intro-p">{text}</p>
    </MDBAnimation>
  );
}
