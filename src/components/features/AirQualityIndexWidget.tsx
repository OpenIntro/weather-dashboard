import styled from 'styled-components'
import { AirQualityData } from '@types'
import { ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { IconButton } from '@common'

interface AirQualityIndexWidgetProps {
  data: AirQualityData
  onRefresh: () => void
  isLoading?: boolean
}

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  font-weight: 600;
  font-size: 16px;
`

const AQISection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const AQICircle = styled.div<{ category: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: white;
  background: ${props => {
    switch (props.category.toLowerCase()) {
      case 'good': return '#00E400'
      case 'moderate': return '#FFFF00'
      case 'unhealthy for sensitive groups': return '#FF7E00'
      case 'unhealthy': return '#FF0000'
      case 'very unhealthy': return '#8F3F97'
      case 'hazardous': return '#7E0023'
      default: return '#00E400'
    }
  }};
`

const AQIDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const AQICategory = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`

const AQIDescription = styled.div`
  font-size: 14px;
  color: #666;
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`

const MetricItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
`

const MetricLabel = styled.div`
  font-size: 12px;
  color: #666;
  font-weight: 500;
`

const MetricValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`

const getAQIColor = (index: number): string => {
  if (index <= 50) return '#00E400'
  if (index <= 100) return '#FFFF00'
  if (index <= 150) return '#FF7E00'
  if (index <= 200) return '#FF0000'
  if (index <= 300) return '#8F3F97'
  return '#7E0023'
}

export const AirQualityIndexWidget: React.FC<AirQualityIndexWidgetProps> = ({ 
  data, 
  onRefresh, 
  isLoading = false 
}) => {
  return (
    <WidgetContainer>
      <WidgetHeader>
        <HeaderLeft>
          <ShieldCheckIcon width={20} height={20} style={{ color: getAQIColor(data.index) }} />
          Air Quality Index
        </HeaderLeft>
        <IconButton
          icon={ArrowPathIcon}
          onClick={onRefresh}
          disabled={isLoading}
          variant="ghost"
          size="small"
          title="Refresh air quality data"
        />
      </WidgetHeader>
      
      <AQISection>
        <AQICircle category={data.category}>
          {data.index}
        </AQICircle>
        <AQIDetails>
          <AQICategory>{data.category}</AQICategory>
          <AQIDescription>
            {data.index <= 50 ? 'Good air quality' :
             data.index <= 100 ? 'Moderate air quality' :
             data.index <= 150 ? 'Unhealthy for sensitive groups' :
             data.index <= 200 ? 'Unhealthy air quality' :
             data.index <= 300 ? 'Very unhealthy air quality' :
             'Hazardous air quality'}
          </AQIDescription>
        </AQIDetails>
      </AQISection>
      
      <MetricsGrid>
        <MetricItem>
          <MetricLabel>PM2.5</MetricLabel>
          <MetricValue>{data.pm25} µg/m³</MetricValue>
        </MetricItem>
        <MetricItem>
          <MetricLabel>PM10</MetricLabel>
          <MetricValue>{data.pm10} µg/m³</MetricValue>
        </MetricItem>
        <MetricItem>
          <MetricLabel>O₃</MetricLabel>
          <MetricValue>{data.o3} ppb</MetricValue>
        </MetricItem>
        <MetricItem>
          <MetricLabel>NO₂</MetricLabel>
          <MetricValue>{data.no2} ppb</MetricValue>
        </MetricItem>
        <MetricItem>
          <MetricLabel>CO</MetricLabel>
          <MetricValue>{data.co} ppm</MetricValue>
        </MetricItem>
        <MetricItem>
          <MetricLabel>SO₂</MetricLabel>
          <MetricValue>{data.so2} ppb</MetricValue>
        </MetricItem>
      </MetricsGrid>
    </WidgetContainer>
  )
}