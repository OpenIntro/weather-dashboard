import React from 'react'
import styled from 'styled-components'
import { WeatherData } from '@types'
import { 
  WindowIcon, 
  CloudIcon, 
  EyeIcon, 
  SunIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline'

interface DetailedWeatherCardProps {
  weather: WeatherData
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CurrentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #FFC107 0%, #FF8F00 100%);
  border-radius: 12px;
  color: white;
`

const CurrentTemp = styled.div`
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
`

const CurrentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const CurrentCondition = styled.div`
  font-size: 18px;
  font-weight: 500;
`

const CurrentTime = styled.div`
  font-size: 14px;
  opacity: 0.9;
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`

const MetricItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
`

const MetricIcon = styled.div`
  color: #FFC107;
  svg {
    width: 24px;
    height: 24px;
  }
`

const MetricContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const MetricLabel = styled.div`
  font-size: 12px;
  color: #666;
  font-weight: 500;
`

const MetricValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`

const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

export const DetailedWeatherCard: React.FC<DetailedWeatherCardProps> = ({ weather }) => {
  return (
    <CardContainer>
      <CurrentSection>
        <CurrentTemp>{Math.round(weather.temperature)}°</CurrentTemp>
        <CurrentDetails>
          <CurrentCondition>{weather.condition}</CurrentCondition>
          <CurrentTime>{getCurrentTime()}</CurrentTime>
        </CurrentDetails>
      </CurrentSection>
      
      <MetricsGrid>
        <MetricItem>
          <MetricIcon>
            <WindowIcon />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Wind Speed</MetricLabel>
            <MetricValue>{weather.windSpeed} km/h {weather.windDirection}</MetricValue>
          </MetricContent>
        </MetricItem>
        
        <MetricItem>
          <MetricIcon>
            <CloudIcon />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Humidity</MetricLabel>
            <MetricValue>{weather.humidity}%</MetricValue>
          </MetricContent>
        </MetricItem>
        
        <MetricItem>
          <MetricIcon>
            <ArrowUpIcon />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Pressure</MetricLabel>
            <MetricValue>{weather.pressure} hPa</MetricValue>
          </MetricContent>
        </MetricItem>
        
        <MetricItem>
          <MetricIcon>
            <EyeIcon />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>Visibility</MetricLabel>
            <MetricValue>{weather.visibility} km</MetricValue>
          </MetricContent>
        </MetricItem>
        
        <MetricItem>
          <MetricIcon>
            <SunIcon />
          </MetricIcon>
          <MetricContent>
            <MetricLabel>UV Index</MetricLabel>
            <MetricValue>{weather.uvIndex}</MetricValue>
          </MetricContent>
        </MetricItem>
      </MetricsGrid>
    </CardContainer>
  )
}