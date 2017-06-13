import React from 'react'
import { connect } from 'react-redux';

import { fetchQlueLocation } from '../../actions/qlueLocationAction'

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
        <h2>Peta</h2>
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