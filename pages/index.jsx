import { useState } from 'react'

import Layout from '@components/layout'
import { isValidUSZipcode } from '@utils/isValidUSZipcode'

const App = () => {
  const [zipcode, setZipcode] = useState('')
  const [error, setError] = useState(null)
  const [forecasts, setForecasts] = useState(null)

  const AWSEndpoint = (zipcode) =>
    `https://lfl3ntnyl2.execute-api.us-east-1.amazonaws.com/forecast?zipcode=${zipcode}`

  const handleForecastSearch = async () => {
    if (zipcode === '') {
      setError('please enter a US zipcode')
      return
    }
    if (!isValidUSZipcode(zipcode)) {
      setError(`${zipcode} is not a valid US zipcode`)
      return
    }
    if (isValidUSZipcode(zipcode)) {
      setError(null)
      const response = await fetch(AWSEndpoint(zipcode))
      const responseData = await response.json()
      setForecasts(responseData.data.timelines)
      setZipcode('')
    }
  }

  const parseDate = (date) =>
    `${new Date(date).getMonth()}/${new Date(date).getDate()}`

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-700 mt-10">
        ten day forecast
      </h1>
      <div className="flex flex-col items-center gap-4 p-4 rounded-xl shadow-xl bg-white">
        <h2 className="text-xl text-gray-600">search by zipcode</h2>
        <select
          name="zipcode"
          className="border-2 border-blue-200 outline-none px-4 py-2 rounded-lg text-gray-700 cursor-pointer shadow-lg hover:shadow-xl transition"
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
        >
          <option value="">select a zipcode</option>
          <option value="90210">90210</option>
          <option value="94133">94133</option>
          <option value="03801">03801</option>
        </select>
        <div
          className="bg-blue-300 hover:bg-blue-400 transition hover:scale-105 text-gray-50 w-min font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
          onClick={handleForecastSearch}
        >
          search
        </div>
      </div>
      {error && <div>{error}</div>}
      <Forecast date="date" forecast="forecast" temp="temp" wind="wind" />
      {forecasts && (
        <>
          <Forecast
            date={parseDate(forecasts[0].intervals[0].startTime)}
            forecast={forecasts[0].intervals[0].values.weatherCode}
            temp={forecasts[0].intervals[0].values.temperature}
            wind={forecasts[0].intervals[0].values.windSpeed}
          />
          {forecasts[1].intervals.map((forecast, i) => (
            <Forecast
              key={i}
              date={parseDate(forecast.startTime)}
              forecast={forecast.values.weatherCode}
              temp={forecast.values.temperature}
              wind={forecast.values.windSpeed}
            />
          ))}
        </>
      )}
    </Layout>
  )
}

export default App

const Forecast = ({ date, forecast, temp, wind }) => (
  <div className="flex flex-row items-center justify-around gap-4 p-4 rounded-xl shadow-xl bg-white">
    <h3>{date}</h3>
    <h3>{forecast}</h3>
    <h3>{temp}</h3>
    <h3>{wind}</h3>
  </div>
)
