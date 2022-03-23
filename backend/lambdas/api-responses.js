const responses = {
  // Lambda response for successful API call
  _200(data = {}) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':
          'http://localhost:3000, https://ten-day-forecast.vercel.app/',
        'Access-Control-Allow-Methods': 'GET',
      },
      statusCode: 200,
      body: JSON.stringify(data),
    }
  },
  // Lambda response for failed API call
  _400(data = {}) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':
          'http://localhost:3000, https://ten-day-forecast.vercel.app/',
        'Access-Control-Allow-Methods': 'GET',
      },
      statusCode: 400,
      body: JSON.stringify(data),
    }
  },
}

module.exports = responses
