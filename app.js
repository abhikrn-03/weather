const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=a014821cc123fe108447e850d67bec6e&query=jamshedpur";

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current.pressure);
});