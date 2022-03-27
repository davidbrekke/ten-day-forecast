import DayForecast from './DayForecast'
import { parseDate } from '@utils/parseDate'
import { getDayOfWeek } from '@utils/parseDate'

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Forecast = ({ forecasts }) =>
  forecasts[0].intervals.map((forecast, i) => (
    <DayForecast
      key={i}
      date={parseDate(forecast.startTime)}
      dayOfWeek={weekday[getDayOfWeek(forecast.startTime)]}
      weatherCode={forecast.values.weatherCode}
      temp={forecast.values.temperature}
      wind={forecast.values.windSpeed}
    />
  ))

export default Forecast
