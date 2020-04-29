import React from 'react';
import styles from '../styles/GoogleMaps.module.scss';

import helper from 'Utils/helper';

export default function Stores(props) {
  const { store, storeImg, address, showDetails } = props;
  const modifiedAddressQuery = helper.modifyAddressForQuery(address);

  return (
    <div className={`${styles.mapStoreInfo} ${showDetails ? 'd-flex' : 'd-none'} box-shadow1`}>
      <div className={`${styles.mapStoreInfo__storeImgWrapper} mr-2`}>
        <img className={`${styles.mapStoreInfo__storeImg} img-fluid`} src={storeImg} />
      </div>
      <div className={`${styles.mapStoreInfo__textInfo} ml-2`}>
        <h2 className={`${styles.header2}`}>{store}</h2>
        <div className={`${styles.mapStoreInfo__address}`}>{address}</div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${modifiedAddressQuery}`}
          rel="noopener noreferrer"
          target="_blank"
          type="button"
          className={`${styles.mapStoreInfo__storeBtn} button text-capitalize mt-3`}>
          Get Driections
        </a>
      </div>
      <div className={`${styles.mapStoreInfo__triangle}`}></div>
    </div>
  );
}
