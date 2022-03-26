const getLocationByZipcode = require('./getLocationByZipcode');
const getForecastByLocation = require('./getForecastByLocation');

const getForecastByZipcode = async (zipcode) => {
  console.log(`zipcode: ${zipcode}`);

  // return null if zipcode is not provided
  if (!zipcode) {
    return null;
  }

  try {
    // get the location data from the zipcode
    const location = await getLocationByZipcode(zipcode);
    // return null if location data not found
    if (!location) {
      return null;
    }

    // get forecast timeline from the location data
    const { data } = await getForecastByLocation(location);
    // return the forecast for the zipcode
    return data;
  } catch (error) {
    console.error('getForecastByZipcode error: ', error);
  }

  // return null if zipcode not found or error
  return null;
};

module.exports = getForecastByZipcode;
