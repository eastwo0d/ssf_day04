const request = require('request');
const keys = require('./keys.json');
const express = require('express');
const qs = require('querystring')
const bodyParser = require('body-parser');

const params = {
    q: "Singapore",
    APPID: keys.weather_keys
}
console.log('params: ', params);

request.get('https://api.openweathermap.org/data/2.5/weather',
    { qs:params },
    (err, weaRes, body) => {
        const results = JSON.parse(body);
        console.log(body);
    }
)