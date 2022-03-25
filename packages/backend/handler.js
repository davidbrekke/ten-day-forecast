const responses = require('./src/api-responses');
const getForecastByZipcode = require('./src/getForecastByZipcode');

exports.main = async (event) => {
  // no zipcode provided
  if (!event.queryStringParameters || !event.queryStringParameters.zipcode) {
    return responses._400({
      message: 'missing zipcode query string parameter',
    });
  }

  // get the zipcode from the query string parameters
  const zipcode = event.queryStringParameters.zipcode;

  // get the forecast for the zipcode
  const forecast = await getForecastByZipcode(zipcode);

  // return the forecast if found
  if (forecast) {
    return responses._200(forecast);
  }

  // zipcode not found in data
  return responses._400({ message: 'zipcode not found in data' });
};
