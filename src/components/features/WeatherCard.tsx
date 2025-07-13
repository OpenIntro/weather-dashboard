import React from 'react'
import styled from 'styled-components'
import { WeatherData, DailyForecast, LocationData } from '@types'
import { 
  SunIcon, 
  CloudIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline'

interface WeatherCardProps {
  weather: WeatherData
  forecast: DailyForecast[]
  location: LocationData
}

const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TemperatureSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Temperature = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #333;
  line-height: 1;
`

const Condition = styled.div`
  font-size: 18px;
  color: #666;
  font-weight: 500;
`

const LocationSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
`

const WeatherIcon = styled.div`
  color: #FFC107;
  svg {
    width: 64px;
    height: 64px;
  }
`

const ForecastSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  flex: 1;
`

const ForecastDay = styled.div`
  font-size: 12px;
  color: #666;
  font-weight: 500;
`

const ForecastTemp = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`

const getWeatherIcon = (condition: string) => {
  const conditionLower = condition.toLowerCase()
  if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
    return SunIcon
  } else {
    return CloudIcon
  }
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather, forecast, location }) => {
  const WeatherIconComponent = getWeatherIcon(weather.condition)

  return (
    <WeatherCardContainer>
      <CurrentWeather>
        <TemperatureSection>
          <Temperature>{Math.round(weather.temperature)}°</Temperature>
          <Condition>{weather.condition}</Condition>
          <LocationSection>
            <MapPinIcon width={16} height={16} />
            {location.city}, {location.country}
          </LocationSection>
        </TemperatureSection>
        <WeatherIcon>
          <WeatherIconComponent />
        </WeatherIcon>
      </CurrentWeather>
      
      <ForecastSection>
        {forecast.slice(0, 5).map((day, index) => {
          const DayIcon = getWeatherIcon(day.condition)
          return (
            <ForecastItem key={index}>
              <ForecastDay>{day.day}</ForecastDay>
              <DayIcon width={24} height={24} style={{ color: '#FFC107' }} />
              <ForecastTemp>{Math.round(day.high)}°</ForecastTemp>
            </ForecastItem>
          )
        })}
      </ForecastSection>
    </WeatherCardContainer>
  )
}