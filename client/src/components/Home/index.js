import React from 'react'
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

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
    return (
      <div>
        <Map
          className='animated lightSpeedIn'
          style={{height: '100vh'}}
          center={[-6.21462, 106.84513]}
          zoom={11}>
          <TileLayer url='https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGlzYW5nZ29yZW5nIiwiYSI6ImNqMjh5OW45ZzAyc2wzMnFpd2RhNTllbXQifQ.s_ZDuvHljSJCVcsFqz708w' attribution='<attribution>' />
        </Map>
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