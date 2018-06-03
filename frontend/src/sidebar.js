import React from 'react';
import $ from "jquery";
import {RenderParticles} from './jsx/particles';
import FontAwesome from 'react-fontawesome';
import {Image} from 'react-bootstrap';
import {SearchForm} from './jsx/form';
import {Col} from 'react-materialize';
import Logo from './img/logo.png';


class Sidebar extends React.Component {
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

export default Sidebar
