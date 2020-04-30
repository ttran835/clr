import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation } from 'mdbreact';
import passwordInput from '../../Components/InputFields';

import verifyInfo from './helper/verifyInfo';
import setToken from './helper/setToken';

const checkSecretPhrase = (password, e) => {
  e.preventDefault();
  if (verifyInfo(password.toLowerCase())) {
    setToken();
    window.location.reload();
  }
  return 'Wrong Place!';
};

export default function Components(props) {
  const [password, input] = passwordInput({
    hint: 'Enter your secret phrase',
    name: 'Password',
  });
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="12">
          <MDBAnimation type="fadeIn" duration="3000ms">
            <h1 className="clr__header1 pink-text">
              Hello there! I want to wish you a Happy Birthday!
            </h1>
          </MDBAnimation>
        </MDBCol>
        <MDBCol size="12">
          <MDBAnimation type="fadeInUp" duration="3000ms" delay="2s">
            <p className="clr__p">
              Now, enter the secret phrase and you will be able to see your awesome gift! <br />
              <span className="font-weight-bold">Hint: The place that we had our first date!</span>
            </p>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBAnimation type="fadeIn" duration="1000ms" delay="6s">
            <form onSubmit={(e) => checkSecretPhrase(password, e)}>
              {input}
              <MDBBtn className="ml-0" type="submit" color="pink">
                Submit Answer
              </MDBBtn>
            </form>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
