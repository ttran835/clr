import React from 'react';
import { MDBBtn } from 'mdbreact';
import Place from './Place';
import styles from '../styles/GoogleMaps.module.scss';

export default function StoreMarker(props) {
  const { placeId, dispatch, actions } = props;
  const { showCardDetails } = actions;
  return (
    <div className={`${styles.mapMaker}`}>
      <img
        className={`${styles.mapMaker__mapIcon} img-fluid`}
        src="https://centinela-feed.mybigcommerce.com/content/images/map-maker.png"
        alt="Centinela Feed Store's Marker"
      />
      <MDBBtn
        id={`place${placeId}`}
        size="sm"
        className={`${styles.mapMaker__checkbox}`}
        onClick={dispatch(showCardDetails, placeId)}>
        Show
      </MDBBtn>
      <Place {...props} />
    </div>
  );
}
