import { isValidUSZipcode } from '@utils/isValidUSZipcode'
import { awsEndpoint } from '@utils/awsEndpoint'

const ZipcodeSearch = ({ zipcode, setZipcode, setError, setForecasts }) => {
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
      const response = await fetch(awsEndpoint(zipcode))
      const responseData = await response.json()
      setForecasts(responseData.data.timelines)
    }
  }

  return (
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
  )
}

export default ZipcodeSearch
