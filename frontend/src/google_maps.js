import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import keys from "./keys";
import { Col } from "react-materialize";
import $ from "jquery";

/**
 * This class makes a call to get the coordinates of the available places
 * from the Elixir app and renders markers on the required coordinates.
 **/
class RenderMarkers extends React.Component {
  constructor() {
    super();
    this.state = { didCoordsLoad: false, coordinates: [] };
  }

  componentWillMount = () => {
    /*
    Before this class is rendered,fetch review data
    from API so that it can be displayed.
    */
    $.get("http://0.0.0.0:4000/get_coordinates", {
      headers: {
        name: "Google Maps from FE"
      }
    }).then(
      function(response) {
        console.log(response);
        this.setState({
          coordinates: response.coordinates,
          didCoordsLoad: true
        });
      }.bind(this)
    );
  };

  render = () => {
    if (this.state.didCoordsLoad) {
      return (
        <div className="availableMarker">
          {this.state.coordinates.map(function(item, index) {
            return (
              <Marker
                key={index}
                position={{
                  lat: item.lat,
                  lng: item.lon
                }}
                options={{ color: "#fff" }}
              />
            );
          })}
        </div>
      );
    } else {
      return (<div></div>);
    }
  };
}

/**
 *
 **/

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.7127753, lng: -74.0059728 }}
    >
      <RenderMarkers />
    </GoogleMap>
  ))
);

class GoogleMaps extends React.Component {
  render() {
    return (
      <Col s={1} className="col s12 m8 l9 map">
        <MyMapComponent
          isMarkerShown
          googleMapURL={keys.gMapsAPI}
          loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
          containerElement={<div style={{ height: `100%`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        />
      </Col>
    );
  }
}

export default GoogleMaps;
