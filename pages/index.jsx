import { useState } from 'react'

import Layout from '@components/layout'
import { isValidUSZipcode } from '@utils/isValidUSZipcode'

const App = () => {
  const [zipcode, setZipcode] = useState('')
  const [forecast, setForecast] = useState(null)

  const handleForecastSearch = async () => {
    if (zipcode === '') {
      setForecast('please enter a US zipcode')
      return
    }
    if (!isValidUSZipcode(zipcode)) {
      setForecast(`${zipcode} is not a valid US zipcode`)
      return
    }
    if (isValidUSZipcode(zipcode)) {
      setForecast(zipcode)
      setZipcode('')
    }
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-700 mt-10">
        ten day forecast
      </h1>
      <div className="flex flex-col items-center gap-4 p-4 rounded-xl shadow-xl bg-white">
        <h2 className="text-xl text-gray-600">search by zipcode</h2>
        {/* <input
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
          type="text"
          placeholder="zipcode..."
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        /> */}
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
      {forecast && <div>{forecast}</div>}
    </Layout>
  )
}

export default App
