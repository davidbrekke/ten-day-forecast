const axios = require('axios');
require('dotenv').config();

const rapidAPIKey = process.env.RAPID_API_KEY;
const redlineAPIURL =
  'https://redline-redline-zipcode.p.rapidapi.com/rest/info.json';

const getLocationByZipcode = async (zipcode) => {
  // return null if zipcode is not provided
  if (!zipcode) {
    return null;
  }
  try {
    // fetch the location data of the zipcode
    const { data } = await axios({
      method: 'GET',
      url: `${redlineAPIURL}/${zipcode}/degrees`,
      headers: {
        'X-RapidAPI-Host': 'redline-redline-zipcode.p.rapidapi.com',
        'X-RapidAPI-Key': rapidAPIKey,
      },
    });
    const location = [data.lat, data.lng];
    return location;
  } catch (error) {
    console.error('getLocationByZipcode error: ', error);
  }

  // return null if location data not found or error
  return null;
};

module.exports = getLocationByZipcode;
