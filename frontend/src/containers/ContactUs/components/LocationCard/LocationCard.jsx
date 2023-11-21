import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import marker from "../../../../components/Images/marker.svg";
import { Icon } from "leaflet";

const Map = styled(MapContainer)`
  width: 100%;
  height: 880px;
  border-radius: 0px 15px 15px 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border: 2px solid #716a7a;
  background-color: #191919;
  overflow: hidden;
  opacity: 0.89;
`;

const LeafLet = () => {
  const newMarker = new Icon({
    iconUrl: marker,
    iconSize: [40, 40],
    className: "my-icon",
  });
  
  return (
    <div>
      <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={newMarker}>
          <Popup>
            <h1 style={{ textAlign: "center" }}>Cambodja</h1>
            <span style={{ color: "#112" }}>Agency Central Office</span>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default LeafLet;
