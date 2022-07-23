import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Config from '../../config';

const GoogleMap = (props) => {
  const { style, className } = props;

  return (
      <Map google={props.google} style={style} initialCenter={{lat:46.85281, lng: 7.58112}} className={`${className}`} zoom={14}>
        <Marker name={"Current location"}  position={{lat: 46.85281, lng:  7.58112}} />
        <InfoWindow></InfoWindow>
      </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: Config.GOOGLE_MAP_API_KEY,
})(GoogleMap);
