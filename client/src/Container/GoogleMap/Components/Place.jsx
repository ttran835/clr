import React from 'react';
import styles from '../styles/GoogleMaps.module.scss';

import helper from 'Utils/helper';

export default function Stores(props) {
  const { place, placeImg, description, showDetails } = props;
  return (
    <div className={`${styles.mapStoreInfo} ${showDetails ? 'd-flex' : 'd-none'} box-shadow1`}>
      <div className={`${styles.mapStoreInfo__storeImgWrapper} mr-2`}>
        <img className={`${styles.mapStoreInfo__storeImg} img-fluid`} src={placeImg} />
      </div>
      <div className={`${styles.mapStoreInfo__textInfo} ml-2`}>
        <h2 className="clr__googleMapHeader2">{place}</h2>
        <div className={`${styles.mapStoreInfo__address}`}>{description}</div>
      </div>
      <div className={`${styles.mapStoreInfo__triangle}`}></div>
    </div>
  );
}
