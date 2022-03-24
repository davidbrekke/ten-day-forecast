import CurrentForecast from './CurrentForecast'
import DayForecast from './DayForecast'
import { parseDate } from '@utils/parseDate'

const Forecast = ({ forecasts }) => (
  <>
    <CurrentForecast
      date={parseDate(forecasts[0].intervals[0].startTime)}
      forecast={forecasts[0].intervals[0].values.weatherCode}
      temp={forecasts[0].intervals[0].values.temperature}
      wind={forecasts[0].intervals[0].values.windSpeed}
    />
    {forecasts[1].intervals.map((forecast, i) => (
      <DayForecast
        key={i}
        date={parseDate(forecast.startTime)}
        forecast={forecast.values.weatherCode}
        temp={forecast.values.temperature}
        wind={forecast.values.windSpeed}
      />
    ))}
  </>
)

export default Forecast
