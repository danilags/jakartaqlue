const express = require('express')
const axios = require('axios')
const router = express.Router()
// const qlueCont = require('../controllers/qlue')

router.get('/qlue', function(req, res) {
  axios.get('http://www.qlue.co.id/vacancy/svc/getDataExample.php')
  .then(response => {
    // console.log("data : ", res.data);
    res.send(response.data)
  })
  .catch(err => { console.log(err)})
})

router.get('/waze', function(req, res) {
  axios.get('http://waze.qlue.id/jakarta/update/0atxn84I3hx2WmNm5ifPDZkJaLERZD9A.json')
  .then(response => {
    res.send(response.data.alerts)
  })
  .catch(err => { console.log(err)})
  
})
module.exports = router