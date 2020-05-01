import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact';
import IntroParagraph from '../IntroParagraph';

const introP =
  'I have spent quite some times building this. I took a lot longer than I was expecting it to since I was doing some experimental thing with it, and it caused me to run out of time :( sadly... \n ' +
  'I included a page that includes what I wanna say to you, another page for moments that I enjoyed being with you and then a map, showing you some of the places that we have been too. Unfortunately, we need to go to more places. \n' +
  'There will be short descriptions about each memories and places. I hope you enjoy reading them. \n' +
  'I really hope you liked your gift.';

export default function HomePage(props) {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="12">
          <MDBAnimation type="fadeIn" duration="2s">
            <h1 className="clr__header1 pink-text">Welcome to your gift!!</h1>
          </MDBAnimation>
        </MDBCol>
        <MDBCol size="12">
          <MDBAnimation type="fadeInUp" delay="1500ms" duration="2s">
            <IntroParagraph text={introP} />
          </MDBAnimation>
        </MDBCol>
        <MDBCol size="12">
          <MDBAnimation type="fadeIn" delay="2000ms" duration="1s">
            <div
              style={{ width: '100%', height: 0, 'padding-bottom': '100%', position: 'relative' }}>
              <iframe
                src="https://giphy.com/embed/n2xphDG4TVvi0"
                width="100%"
                height="100%"
                style={{ position: 'absolute' }}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen></iframe>
            </div>
            <p>
              <a href="https://giphy.com/gifs/box-quot-oink-n2xphDG4TVvi0">via GIPHY</a>
            </p>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
