import React from 'react'
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import '../../App.css';


import { fetchQlueLocation } from '../../actions/qlueLocationAction'



const myIcon = L.icon({ iconUrl: 'http://www.qlue.co.id/vacancy/svc/icon-marker.png', iconSize: [25, 25], iconAnchor: [25, 25], popupAnchor: [-3, -26] })


class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchQlueLocation()
  }

  render () {
    let maps
    let marker

    marker = (
      <div>
        {this.props.qlueLocation.map((location, index) => {
          return (
            <Marker key={index} position={[location.lat, location.lng]} icon={myIcon} >
              <Popup>
                <span>
                  Number: {location.placemark_id}. <br />
                  Location: {location.name}. <br />
                  Address: {location.address} <br />
                  Latitude: {location.lat} <br />
                  Longitude: {location.lng} <br />
                </span>
              </Popup>
            </Marker>
          )
        })}
      </div>
    )

    if (this.props.qlueLocation.length === 0) {
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
        <div id="map" style={{width : '100%', height : 300}}>
          <Map
            className='animated lightSpeedIn'
            style={{width: '100%', height : 700}}
            center={[-6.21462, 106.84513]}
            zoom={11}>
            <TileLayer url='https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGlzYW5nZ29yZW5nIiwiYSI6ImNqMjh5OW45ZzAyc2wzMnFpd2RhNTllbXQifQ.s_ZDuvHljSJCVcsFqz708w' attribution='<attribution>' />
            {marker}
          </Map>
        </div>
      )
    }

    return (
      <div>
        {maps}
      </div>
    )

  }

}

const mapStateToProps = state => {
  console.log("ini state yang di home: ", state.qlueLocation);
  return {
    qlueLocation: state.qlueLocation
  }
}

const mapDispatchToProps = dispatch => ({
  fetchQlueLocation: () => dispatch(fetchQlueLocation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)