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
              <p>
                Kota: {location.city} <br />
                Jalan: {location.street} <br />
                Latitude: {location.location.y} <br />
                Longitude: {location.location.x} <br />
              </p>
            </Popup>
          </Marker>
        )
        })}
      </div>
    )

    if (this.props.wazeLocation.length === 0 ) {
      maps = (
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
      )
    } else {
      maps = (
        <Map
          className='animated lightSpeedIn'
          style={{height: '100vh'}}
          center={[-6.21462, 106.84513]}
          zoom={11}>
          <TileLayer url='https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGlzYW5nZ29yZW5nIiwiYSI6ImNqMjh5OW45ZzAyc2wzMnFpd2RhNTllbXQifQ.s_ZDuvHljSJCVcsFqz708w' attribution='<attribution>' />
          {marker}
        </Map>
      )
    }

    return (
      <div>
        { maps }
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