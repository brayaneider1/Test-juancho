import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../common/Assets/Icons/location-pin.svg'),
    iconRetinaUrl: require('../../common/Assets/Icons/location-pin.svg'),
     iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: ''
});

export { iconPerson };