'use strict';

var helpers = require('./helpers'),
    _ = require('lodash'),
    request = require('request'),
    Promise = require('bluebird'),
    Async = require('async');

var count = 1;
var total = 0;
var validCondition = true;
var uri = 'http://shopicruit.myshopify.com/products.json?page=';
var products = [];

Async.whilst(
    function () {
        return validCondition;
    },
    function (callback) {
        request(uri + count, function (err, res, body) {
            body = JSON.parse(body);
            validCondition = body.products.length > 0 ? true : false;
            if (validCondition) {
                _.forEach(body.products, function(product) {
                    helpers.checkAndCount(product, total);
                });
            }
            count++;
            callback(null, total);
        });
    },
    function (err, price) {
        console.log(price);
    }
);
