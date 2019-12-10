
import React from "react";
import TruckMapCard from "./TruckMapCard";




const TruckMapContainer = () => (
  <div className="map">
    <TruckMapCard
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBP0imMQMKHpw2FNjZGeT0RO1PVEwxWqHc&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%`, width: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)

 


export default TruckMapContainer;