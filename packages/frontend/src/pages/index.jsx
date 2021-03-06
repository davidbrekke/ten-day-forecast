import { useState } from 'react'

import Layout from '@components/layout'
import ZipcodeSearch from '@components/zipcodeSearch'
import Forecast from '@components/forecast'

const App = () => {
  const [zipcode, setZipcode] = useState('')
  const [error, setError] = useState(null)
  const [forecasts, setForecasts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-700 mt-10">
        ten day forecast
      </h1>
      <ZipcodeSearch
        zipcode={zipcode}
        setZipcode={setZipcode}
        setError={setError}
        setForecasts={setForecasts}
        setIsLoading={setIsLoading}
      />
      {error && <h2 className="text-red-600 font-semibold">{error}</h2>}
      {isLoading && <h2 className="text-gray-600 font-semibold">loading...</h2>}
      {forecasts && <Forecast forecasts={forecasts} />}
    </Layout>
  )
}

export default App
