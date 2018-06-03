import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import keys from './keys';
import {Col} from 'react-materialize';
import $ from "jquery";
import axios from 'axios'


class RenderMarkers extends React.Component {
  constructor() {
    super();
    this.state = {coordinates: []};
   // this.handleClick = this.get_coordinates.bind(this)
  }

  render() {
    return (
      <div>
        {$.get('https://0.0.0.0:4000/get_coordinates').then(response => this.setState({coodinates: response.coordinates})) &&
        this.state.coordinates.map(function(item, index){
         return (<Marker
            key={index}
            position={{ lat: this.coordinates.lat, lng: this.coordinates.lon}}
            options={{
                  color: "#fff"
              }}
          />)
        })}
      </div>
    )
  }
}


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 40.7127753, lng: -74.0059728}}>
    <RenderMarkers/>
  </GoogleMap>
))

class GoogleMaps extends React.Component {
  render() {
    return (
    <Col s={1} className='col s12 m8 l9 map'>
    <MyMapComponent
        isMarkerShown
        googleMapURL= {keys.gMapsAPI}
        loadingElement={<div style={{ height: `100%`, width: `100%`}} />}
        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%`, width: `100%` }} />}
      />
    </Col>
    )
  }
}

export default GoogleMaps