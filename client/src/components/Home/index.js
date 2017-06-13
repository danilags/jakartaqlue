import React from 'react'
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import '../../App.css';

import { fetchQlueLocation } from '../../actions/qlueLocationAction'

const Icon = L.icon({
  iconUrl: 'http://www.qlue.co.id/vacancy/svc/icon-marker.png',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [-3, -26]
})

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchQlueLocation()
  }

  render () {
    let marker

    marker = (
      <div>
        {this.props.qlueLocation.map((location, index) => {
          return (
            <Marker key={index} position={[location.lat, location.lng]} icon={Icon} >
              <Popup>
                <div className="popup">
                  <p>Number: {location.placemark_id}</p>
                  <p>Location: {location.name}</p>
                  <p>Address: {location.address}</p>
                  <p>Latitude: {location.lat}</p>
                  <p>Longitude: {location.lng}</p>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </div>
    )

    return (
      <div>
      {
        this.props.qlueLocation.length == 0 ?
          <div className="loader-wrapper">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        :
          <div id="map" style={{width : '100%', height : 300}}>
            <Map
              style={{width: '100%', height : 700}}
              center={[-6.21462, 106.84513]}
              zoom={11}>
              <TileLayer url='https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuaWxhZ3MiLCJhIjoiY2ozdnRxamxnMDA3dTMybnBwNDhqcmloYyJ9.KHnkrXUOv2MGfn_0-QLvcQ' attribution='<attribution>' />
              {marker}
            </Map>
          </div>
      }
      </div>
    )

  }

}

const mapStateToProps = state => {
  // console.log("ini state yang di home: ", state.qlueLocation);
  return {
    qlueLocation: state.qlueLocation
  }
}

const mapDispatchToProps = dispatch => ({
  fetchQlueLocation: () => dispatch(fetchQlueLocation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)