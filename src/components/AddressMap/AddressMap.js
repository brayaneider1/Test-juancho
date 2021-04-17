import React, { useEffect, useRef, useState } from "react";
import { TileLayer, MapContainer, Popup,Marker, FeatureGroup, Circle, LayersControl, LayerGroup } from 'react-leaflet';
import './AddressMap.css'
const MapboxGLMap = () => {
    const position = [51.505, -0.09]


  return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default MapboxGLMap;
