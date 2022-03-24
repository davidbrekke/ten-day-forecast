const DayForecast = ({ date, forecast, temp, wind }) => (
  <div className="flex flex-row items-center justify-around gap-4 p-4 rounded-xl shadow-xl text-gray-600 bg-white cursor-pointer transition hover:shadow-2xl hover:scale-105">
    <h3>{date}</h3>
    <h3>{forecast}</h3>
    <h3>{temp}</h3>
    <h3>{wind}</h3>
  </div>
)

export default DayForecast
