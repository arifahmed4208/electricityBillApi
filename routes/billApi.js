var express = require('express');
var cors = require('./../cors');
const request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('bill api');
  console.log(req.query);
  var billApiReponse = res;
  const requestOptions = {
    url: 'https://www.apdclrms.com/cbs/RestAPI/myBijulee/ConsDetails',
    method: 'POST',
    json: {},
    qs: {
        cons_no: req.query.id
    }
  };

  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
      billApiReponse.send(err);
    } else if (response.statusCode === 200) {
      console.log(body);
      billApiReponse.send(body);
    } else {
      console.log(response.statusCode);
      billApiReponse.send(response.statusCode);
    }
  });

});

module.exports = router;


  
  
  
