import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

import styles from './styles.module.scss';

/**
 *
 * @param {Object} props
 * @returns {Object} ImgCard
 * @example arg obj {locationName, city, description ,img, alt}
 */

export default function ImgCard(props) {
  const { locationName, city, description, img, alt, showDetails } = props.memory;
  const { showCardDetails, dispatch, cardId } = props;

  const info = (
    <MDBAnimation type="fadeIn" duration="300ms">
      <MDBCardBody className={`${styles.clrCardBody} white-text`} cascade>
        <MDBBtn className={styles.clrImgCardBtn} size="sm" floating color="pink" onClick={dispatch(showCardDetails, cardId)}>
          <MDBIcon icon="times" />
        </MDBBtn>
        <MDBCardTitle className="card-title mt-3 mt-md-4">
          <strong>{locationName}</strong>
        </MDBCardTitle>
        <p className="font-weight-bolder pink-text">{city}</p>
        <MDBCardText className="white-text">{description}</MDBCardText>
      </MDBCardBody>
    </MDBAnimation>
  );

  return (
    <MDBAnimation duration="1000ms" type="fadeIn">
      <MDBCard className={styles.clrCard}>
        <button className="p-0" onClick={dispatch(showCardDetails, cardId)}>
          <MDBCardImage
            hover
            overlay="white-light"
            className="card-img-top box-shadow2"
            src={img}
            alt={alt}
          />
        </button>
        {showDetails ? info : null}
      </MDBCard>
    </MDBAnimation>
  );
}
