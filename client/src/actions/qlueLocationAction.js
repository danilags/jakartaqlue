import axios from 'axios'

import { GET_QLUE_LOCATION } from './constants'

export const getQlueLocation = location => ({
  type: GET_QLUE_LOCATION,
  payload: location
})

export const fetchQlueLocation = () => dispatch => {
  let url = 'http://localhost:3000/maps/qlue'

  axios.get(url)
  .then(res => {
    setTimeout(function() {
      dispatch(getQlueLocation(res.data))
    }, 4000)
  })
  .catch(err => { console.log(err)})
}