import React from 'react'
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import '../../App.css';

import { fetchWazeLocation } from '../../actions/wazeLocationAction'


class Waze extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchWazeLocation()
  }

  render () {
    let maps
    let marker

    marker = (
      <div>
      {this.props.wazeLocation.map((location, index) => {
        return (
          <Marker key={index} position={[location.location.y, location.location.x]}>
            <Popup>
              <div>
                <p>City: {location.city}</p>
                <p>Street: {location.street}</p>
                <p>Latitude: {location.location.y}</p>
                <p>Longitude: {location.location.x}</p>
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
        this.props.wazeLocation.length == 0 ?
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
          <Map
            className='animated lightSpeedIn'
            style={{height: '100vh'}}
            center={[-6.21462, 106.84513]}
            zoom={11}>
            <TileLayer url='https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuaWxhZ3MiLCJhIjoiY2ozdnRxamxnMDA3dTMybnBwNDhqcmloYyJ9.KHnkrXUOv2MGfn_0-QLvcQ' attribution='<attribution>' />
            {marker}
          </Map>
      }
      </div>
    )


  }
}

const mapStateToProps = state => {
  // console.log("ini yang dari waze : ", state.wazeLocation);
  return {
    wazeLocation: state.wazeLocation
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWazeLocation: () => dispatch(fetchWazeLocation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Waze)