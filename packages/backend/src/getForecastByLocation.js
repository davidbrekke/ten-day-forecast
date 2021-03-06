const axios = require('axios');
const moment = require('moment');
const queryString = require('query-string');
require('dotenv').config();

// tomorrow API key
const tomorrowURL = 'https://api.tomorrow.io/v4/timelines';
// tomorrow.io API key
const tomorrowAPIKey = process.env.TOMORROW_API_KEY;
// forecast fields to query
const fields = ['windSpeed', 'temperature', 'weatherCode'];
// choose the unit system, either metric or imperial
const units = 'imperial';
// set the timesteps, "1d"
const timesteps = ['1d'];
// configure the time frame from now to 10 days out
const now = moment.utc();
const startTime = moment.utc(now).add(0, 'minutes').toISOString();
const endTime = moment.utc(now).add(10, 'days').toISOString();

const getForecastByLocation = async (location) => {
  // return null if location is not provided
  if (!location) {
    return null;
  }
  try {
    const forecastParams = queryString.stringify(
      {
        apikey: tomorrowAPIKey,
        location,
        fields,
        units,
        timesteps,
        startTime,
        endTime,
      },
      { arrayFormat: 'comma' }
    );
    const { data } = await axios({
      method: 'GET',
      url: `${tomorrowURL}?${forecastParams}`,
    });
    return data;
  } catch (error) {
    console.error('getForecastByLocation error: ', error);
  }

  // return null if forecast data not found or error
  return null;
};

module.exports = getForecastByLocation;
