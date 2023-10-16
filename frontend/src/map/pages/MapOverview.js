import React, { useState } from 'react';

import Map from '../../shared/components/UIElements/Map';
import Card from '../../shared/components/UIElements/Card';
import './MapOverview.css';
// 32.369594573727845, -90.899895074195

const MapOverview = (props) => {

    const showMap = useState(true);
    const {userData, Trips} = props;
    // const openMapHandler = () => setShowMap(true);
    // const closeMapHandler = () => setShowMap(false);
   
    // console.log("userData:", userData);
    // console.log("Trips:", Trips);
    
    return ( 
      // The lat and lang are centered to highlight the  stores in the southwest && southeast region
      
      <div className="map-overview-container" show={showMap}>
          <Map userData={userData} Trips={Trips} latitude={32.44918332468353} longitude={-88.4046182840415} zoom={5.2} multipleMarkers={true}/>
      </div>
    );

};

export default MapOverview;