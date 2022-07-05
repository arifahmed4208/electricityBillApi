var express = require('express');
var cors = require('./../cors');
var http = require("https");
const request = require('request');
var router = express.Router();


// static sendBillResponse(req, res ,next) {
//     // const serverRes = res;
//     // var http = require("https");

//     // const requestOptions = {
//     //     "path": 'http://localhost:5000/api/Books/GetBookByString',
//     //     "method": 'GET',
//     //     json: {},
//     //     qs: {
//     //         id: 1
//     //     }
//     //   };

//     const serverRes = res;
//     const requestOptions = {
//         url: 'http://localhost:5000/api/Books/GetBookByString',
//         method: 'GET',
//         json: {},
//         qs: {
//             id: 1
//         }
//       };

//       request(requestOptions, (res) => {
//         //apiResponse = response;
//         serverRes.send();
//         console.log(response.toString());
//         //res(response);
//         // if (err) {
//         //   console.log(err);
//         // } else if (response.statusCode === 200) {
//         //   console.log(body);
//         // } else {
//         //   console.log(response.statusCode);
//         // }
//       });


// }
/* GET users listing. */
router.get('/', function(req, res, next) {
  var apiResponse = res;
  //res.send('test api');
  //let apiResponse;
  const requestOptions = {
    url: 'http://localhost:5000/api/Books/GetBookByString',
    method: 'GET',
    json: {},
    qs: {
        id: 1
    }
  };
  request(requestOptions, (err, response, body) => {
    console.log(response);
    //res(response);
    apiResponse.send(response);
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      console.log(body);
    } else {
      console.log(response.statusCode);
    }
  });

  //res.send(apiResponse);
});

// router.route('/')
// .options(cors.cors,(req,res)=>{
//     console.log("Coming api request here here");
//     res.sendStatus(200);
// })
// .get(cors.cors,(req,res,next)=>{

//     const requestOptions = {
//         url: 'http://localhost:5000/api/Books/GetBookByString',
//         method: 'GET',
//         json: {},
//         qs: {
//             id: 1
//         }
//       };

//       request(requestOptions, (err, response, body) => {
//         if (err) {
//           console.log(err);
//         } else if (response.statusCode === 200) {
//           console.log(body);
//         } else {
//           console.log(response.statusCode);
//         }
//       });

// })

module.exports = router;