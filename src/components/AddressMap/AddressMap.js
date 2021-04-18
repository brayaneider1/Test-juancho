import React, { useEffect, useRef, useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import {
	TileLayer,
	MapContainer,
	Popup,
	Marker
} from 'react-leaflet'
import './AddressMap.css'
import "leaflet/dist/leaflet.css";
import { iconPerson } from './Icons';

const MapboxGLMap = () => {
	

	const position =[33.4095234, -79.7487981]




	return (
		<MapContainer
			center={position}
			zoom={30}
			easeLinearity={0.35}
			className="leaflet-container"
			scrollWheelZoom={true}>
			<TileLayer
				subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
				maxZoom={16}
				url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				foo="bar" />
				  	<Marker icon={iconPerson} position={position}>
					  <Popup>
						  A pretty CSS3 popup. <br /> Easily customizable.
					  </Popup>
				  </Marker>
				  
		
		</MapContainer>
	)
}

export default MapboxGLMap
