import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from '../styles/GoogleMaps.module.scss';
import PlaceMaker from './PlaceMaker';

const center = { lat: 33.6700055, lng: -117.969478 };
export default function Map(props) {
  const { places } = props.state;
  const { dispatch, actions } = props;
  return (
    <div className={`${styles.map} box-shadow1`}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API }}
        defaultCenter={center}
        defaultZoom={11}>
        {places.map((place, i) => {
          const { map } = place;
          return (
            <PlaceMaker
              key={i}
              placeId={i}
              dispatch={dispatch}
              actions={actions}
              lat={map.lat}
              lng={map.lng}
              {...place}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
