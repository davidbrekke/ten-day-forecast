const CurrentForecast = ({ date, forecast, temp, wind }) => (
  <div className="flex flex-col items-center gap-4 p-4 rounded-xl shadow-xl bg-white transition hover:shadow-2xl hover:scale-105">
    <h3 className="text-xl font-semibold text-gray-600">current forecast</h3>
    <div className="flex flex-row items-center justify-around gap-4 text-gray-600">
      <h3>{date}</h3>
      <h3>{forecast}</h3>
      <h3>{temp}</h3>
      <h3>{wind}</h3>
    </div>
  </div>
)

export default CurrentForecast
