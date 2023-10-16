import React, { useState } from 'react';
import Map from '../../shared/components/UIElements/Map';
import './MapOverview.css';

const MapOverview = (props) => {

    const showMap = useState(true);
    const {userData, Trips} = props;
    return ( 
      // Overview of stores in the southwest && southeast region
      <div className="map-overview-container" show={showMap}>
          <Map userData={userData} Trips={Trips} latitude={32.42924107050984} longitude={-88.40535440138072} zoom={5} multipleMarkers={true}/>
      </div>
    );

};

export default MapOverview;