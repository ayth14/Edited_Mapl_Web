import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Config from '../../config';

const GoogleMap = (props) => {
  const { style, className } = props;

  return (
      <Map google={props.google} style={style} className={`${className}`} zoom={18}>
        <Marker name={"Current location"} />
        <InfoWindow></InfoWindow>
      </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: Config.GOOGLE_MAP_API_KEY,
})(GoogleMap);
