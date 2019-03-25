require("dotenv").config();
const axios = require("axios");
exports.handler = function(event, context, callback) {
  let clientIp = event.headers["client-ip"];
  if (!clientIp) {
    if (process.env.FALLBACK_CLIENT_IP) {
      clientIp = process.env.FALLBACK_CLIENT_IP;
    } else {
      callback(new Error("couldn't read client ip"));
      return;
    }
  }
  axios
    .get(
      `http://api.ipstack.com/${clientIp}?access_key=${
        process.env.IPSTACK_KEY
      }&fields=city,location.capital`
    )
    .then(resp => {
      const city = resp.data.city || resp.data.location.capital;
      if (!city) {
        callback(new Error("couldn't read city from ip"));
      }

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${
            process.env.OPEN_WEATHER_MAP_KEY
          }`
        )
        .then(resp => {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(resp.data)
          });
        })
        .catch(err => {
          callback(err);
        });
    })
    .catch(err => {
      callback(err);
    });
};
