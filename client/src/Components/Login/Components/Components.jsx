import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import passwordInput from '../../InputFields';

import styles from './styles/Login.module.scss';

export default function Components(props) {
  const [password, input] = passwordInput({ hint: 'Enter your secret phrase', name: 'Password' });
  console.log({ password });
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <h2 className={`${styles.inputTest}`}>Hello</h2>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>{input}</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
