import axios from 'axios'

import { GET_QLUE_LOCATION } from './constants'

export const getQlueLocation = location => ({
  type: GET_QLUE_LOCATION,
  payload: location
})

export const fetchQlueLocation = () => dispatch => {
  let url = 'http://www.qlue.co.id/vacancy/svc/getDataExample.php'

  axios.get(url)
  .then(res => {
    console.log("ini datanya : ", res.data)
    dispatch(getQlueLocation(res.data))
  })
  .catch(err => { console.log(err)})
}