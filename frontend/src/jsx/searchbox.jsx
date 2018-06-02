import React from 'react';
import {Input} from 'react-materialize';
import {StandaloneSearchBox} from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import {withScriptjs} from "react-google-maps";
import { compose, withProps, lifecycle } from 'recompose';
import keys from '../keys';

export const Searchbox = compose(
   withProps({
     googleMapURL: keys.gMapsAPI,
     loadingElement: <div style={{ height: `100%` }} />,
     containerElement: <div style={{ height: `400px` }} />,
   }),
   lifecycle({
     componentWillMount() {
       const refs = {}

       this.setState({
         places: [],
         onSearchBoxMounted: ref => {
           refs.searchBox = ref;
         },
         onPlacesChanged: () => {
           const places = refs.searchBox.getPlaces();

           this.setState({
             places,
           });
         },
       })
     },
   }),
   withScriptjs
 )(props =>
   <div data-standalone-searchbox="">
     <StandaloneSearchBox
       ref={props.onSearchBoxMounted}
       bounds={props.bounds}
       onPlacesChanged={props.onPlacesChanged}
     >
      <Input type="text" s={12} placeholder="Enter a location"/>
     </StandaloneSearchBox>
     <ol>
       {props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
         <li key={place_id}>
           {formatted_address}
           {" at "}
           ({location.lat()}, {location.lng()})
         </li>
       )}
     </ol>
   </div>
 );