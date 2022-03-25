const zipcodes = require('./zipcode-data');

const getForecastByZipcode = async (zipcode) => {
  // return null if zipcode is not provided
  if (!zipcode) {
    return null;
  }

  // return the forecast for the zipcode
  if (zipcodes[zipcode]) {
    return zipcodes[zipcode];
  }

  // return null if zipcode not found in data
  return null;
};

module.exports = getForecastByZipcode;
