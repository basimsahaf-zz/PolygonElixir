import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import {Row, Col} from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import keys from './keys';
import $ from "jquery";
import {Image} from 'react-bootstrap';
import {RenderParticles} from './jsx/particles'
import {SearchForm} from './jsx/form'

/* Importing media */
import Logo from './img/logo.png';


class LeftBar extends React.Component {
  constructor() {
    super();
    this.state = {lat: 0, long: 0, apiStr: 'Finding current location'};
    this.location = navigator.geolocation.getCurrentPosition(function(position)
    {
      var address = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
      + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyCU1p7jqHvM6zxyxhrTkNBbDGNoYnsYlOs";

      $.getJSON(address, function(data) {
         this.setState({
           apiStr: data.results[0].formatted_address
         })
      }.bind(this));

      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    }.bind(this));
  }

  render() {
    return (
      <Col s={1} className='col s12 m4 l3 leftBar'>
        <RenderParticles/>
        <Image className = "logo" src = {Logo} responsive />
        <div className="location">
        <FontAwesome
        className='super-crazy-colors'
        name='location-arrow'
        pulse
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#d35400'}}
      /> {this.state.apiStr}
        </div>
        <SearchForm/>

      </Col>
    )
  }
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 40.7127753, lng: -74.0059728}}>
  </GoogleMap>
))

class MapSec extends React.Component {
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


class MainPage extends React.Component {
  render() {
    return (
      <Row>
        <LeftBar/>
        <MapSec/>
      </Row>
    )
  }
}


ReactDOM.render(
  <MainPage/>,
  document.getElementById('root')
);
