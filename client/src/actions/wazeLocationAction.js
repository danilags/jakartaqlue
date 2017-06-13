import axios from 'axios'

import { GET_WAZE_LOCATION } from './constants'

export const getWazeLocation = location => ({
  type: GET_WAZE_LOCATION,
  payload: location
})

export const fetchWazeLocation = () => dispatch => {
  let url = 'http://localhost:3000/maps/waze'

  axios.get(url)
  .then(res => {
    // console.log("yayaya : ", res.data);
    dispatch(getWazeLocation(res.data))
  })
  .catch(err => { console.log(err)})
}