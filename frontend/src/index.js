import React from 'react';
import { render } from 'react-dom';
import './index.css';
import {Row} from 'react-materialize';
import {Router, Route, browserHistory} from 'react-router'
import GoogleMaps from './google_maps'
import Sidebar from './sidebar'



class MainPage extends React.Component {
  render() {
    return (
      <Row>
        <Sidebar/>
        <GoogleMaps/>
      </Row>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path='/hello' component={MainPage}/>
  </Router>,
  document.getElementById('root')
);
