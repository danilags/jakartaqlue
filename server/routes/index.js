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

module.exports = router