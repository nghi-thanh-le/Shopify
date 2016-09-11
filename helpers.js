'use strict';

var request = require('request'),
    _ = require('lodash'),
    Promise = require('bluebird'),
    http = require('http');


module.exports = {
    getRequest: function (uri) {
        return new Promise(function (resolve, reject) {
            request({
                method: 'GET',
                uri: uri
            }, function (err, response, body) {
                if(err) {
                    reject(err);
                } else {
                    body = JSON.parse(body);
                    resolve(body);
                }
            });
        });
    },
    checkAndCount : function (product, total) {
        if(product.product_type == 'Clock' || product.product_type == 'Watch') {
            _.forEach(product.variants, function (variant) {
                total += parseFloat(variant.price);
            });
        }
    }
};
