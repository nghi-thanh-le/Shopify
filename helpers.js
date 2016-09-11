'use strict';

var request = require('request');

module.exports = {
    asyncRequest: function (uri, callback) {
        request({
            method: 'GET',
            uri: uri
        }, function (err, res, body) {
            body = JSON.parse(body);
            callback(body);
        });
    }
};
