import React, { useState } from 'react';

import Map from '../../shared/components/UIElements/Map';
import Card from '../../shared/components/UIElements/Card';
import './MapOverview.css';


const MapOverview = (props) => {

    const showMap = useState(true);
    const {userData, Trips} = props;
    return ( 
      // Overview of all locations on login
      <div className="map-overview-container" show={showMap}>
          <Map userData={userData} Trips={Trips} latitude={32.44918332468353} longitude={-88.4046182840415} zoom={5.2} multipleMarkers={true}/>
      </div>
    );

};

export default MapOverview;