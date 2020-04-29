import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import ImgCard from 'Components/ImgCard';
import IntroParagraph from 'Components/IntroParagraph';

const introP =
  'Hello there. This page includes some of my memories that we had together. Too bad we do not have more because of covid-19. He sucks!';

export default function Components(props) {
  console.log({ props });
  const { memories } = props.state;
  const { actions, dispatch } = props;

  return (
    <MDBRow>
      <MDBCol size="12">
        <h1 className="clr__header1 pink-text mb-3">Memories</h1>
      </MDBCol>
      <MDBCol size="12">
        <IntroParagraph text={introP} />
      </MDBCol>
      {memories.map((memory, id) => (
        <MDBCol key={id} size="12" sm="6" md="4" className="mt-3">
          <ImgCard
            memory={memory}
            dispatch={dispatch}
            cardId={id}
            showCardDetails={actions.showCardDetails}
          />
        </MDBCol>
      ))}
    </MDBRow>
  );
}
