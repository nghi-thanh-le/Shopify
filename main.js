'use strict';

var helpers = require('./helpers'),
    _ = require('lodash'),
    request = require('request'),
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
        helpers.asyncRequest(uri + count, function (response) {
            validCondition = response.products.length > 0 ? true : false;
            if (validCondition) {
                _.forEach(response.products, function(product) {
                    if(product.product_type == 'Clock' || product.product_type == 'Watch') {
                        products.push(product);
                    }
                });
            }
            count++;
            callback(null);
        });
    },
    function (err) {
        _.forEach(products, function (product) {
            _.forEach(product.variants, function (variant) {
                total += parseFloat(variant.price);
            });
        });
        console.log('Total price: ', total);
    }
);
