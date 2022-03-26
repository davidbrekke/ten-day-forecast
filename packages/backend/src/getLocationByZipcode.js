const axios = require('axios').default;

const rapidAPIKey = '44cdaafa14mshcacd0e636931634p17802cjsnee6262a124b2';
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
