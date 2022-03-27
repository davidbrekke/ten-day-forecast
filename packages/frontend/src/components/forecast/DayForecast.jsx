import { weatherCodes } from '@utils/weatherCodes'

const DayForecast = ({ date, dayOfWeek, weatherCode, temp, wind }) => (
  <div className="flex flex-row items-center justify-evenly w-1/2 min-w-fit p-4 rounded-xl shadow-xl text-gray-600 bg-white cursor-pointer transition hover:shadow-2xl hover:scale-105">
    <div className="flex flex-col items-center">
      <h3 className="font-bold">{dayOfWeek.substring(0, 3)}</h3>
      <h3 className="text-gray-500">{date}</h3>
    </div>
    <h3 className="text-center px-4">{weatherCodes[weatherCode]}</h3>
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-lg">{Math.round(temp)}°</h3>
      <h3 className="text-gray-500 text-center">{Math.round(wind)} mph</h3>
    </div>
  </div>
)

export default DayForecast
