import DayForecast from './DayForecast'
import { parseDate } from '@utils/parseDate'

const Forecast = ({ forecasts }) =>
  forecasts[0].intervals.map((forecast, i) => (
    <DayForecast
      key={i}
      date={parseDate(forecast.startTime)}
      forecast={forecast.values.weatherCode}
      temp={forecast.values.temperature}
      wind={forecast.values.windSpeed}
    />
  ))

export default Forecast
