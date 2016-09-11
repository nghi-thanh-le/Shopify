'use strict';

var helpers = require('./helpers'),
    _ = require('lodash'),
    request = require('request'),
    Promise = require('bluebird'),
    Async = require('async');

var count = 1;
var total = 0;
var validCondition;
var uri = 'http://shopicruit.myshopify.com/products.json?page=';
var promiseArr = [];
var products = [];
var asyncArr = [];

// (function loop(loopCondition) {
//     if(loopCondition) {
//         request(uri + count, function (err, res, body) {
//             body = JSON.parse(body);
//             validCondition = body.products.length > 0 ? true : false;
//             if (validCondition) {
//                 _.forEach(body.products, function(product) {
//                     if (product.product_type == 'Clock' || product.product_type == 'Watch') {
//                         products.push(product);
//                     }
//                 });
//                 count++;
//                 loop(validCondition);
//             }
//         });
//     }
// }());

// do {
//     asyncArr.push(
//         function (callback) {
//             request(uri + count, function (err, res, body) {
//                 body = JSON.parse(body);
//                 validCondition = body.products.length > 0 ? true : false;
//                 if (validCondition) {
//                     _.forEach(body.products, function(product) {
//                         if (product.product_type == 'Clock' || product.product_type == 'Watch') {
//                             products.push(product);
//                         }
//                     });
//                 }
//                 count++;
//                 callback();
//             });
//         }
//     );
// } while (validCondition);
//
// Async.series(asyncArr, function (err) {
//     console.log(products);
// });


// Promise.all(promiseArr).then(function() {
//     console.log(products);
// });
