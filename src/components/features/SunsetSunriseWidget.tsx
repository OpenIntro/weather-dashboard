import styled from 'styled-components'
import { SunriseSunsetData } from '@types'
import { SunIcon } from '@heroicons/react/24/outline'

interface SunsetSunriseWidgetProps {
  data: SunriseSunsetData
}

const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const WidgetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  font-weight: 600;
  font-size: 16px;
`

const TimesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`

const TimeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
`

const TimeIcon = styled.div<{ isSunrise: boolean }>`
  color: ${props => props.isSunrise ? '#FF6B35' : '#FFC107'};
  svg {
    width: 32px;
    height: 32px;
  }
`

const TimeLabel = styled.div`
  font-size: 12px;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const TimeValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`

const DayLength = styled.div`
  text-align: center;
  font-size: 14px;
  color: #666;
  padding: 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-weight: 500;
`

export const SunsetSunriseWidget: React.FC<SunsetSunriseWidgetProps> = ({ data }) => {
  return (
    <WidgetContainer>
      <WidgetHeader>
        <SunIcon width={20} height={20} style={{ color: '#FFC107' }} />
        Sunrise & Sunset
      </WidgetHeader>
      
      <TimesContainer>
        <TimeItem>
          <TimeIcon isSunrise={true}>
            <SunIcon />
          </TimeIcon>
          <TimeLabel>Sunrise</TimeLabel>
          <TimeValue>{data.sunrise}</TimeValue>
        </TimeItem>
        
        <TimeItem>
          <TimeIcon isSunrise={false}>
            <SunIcon />
          </TimeIcon>
          <TimeLabel>Sunset</TimeLabel>
          <TimeValue>{data.sunset}</TimeValue>
        </TimeItem>
      </TimesContainer>
      
      <DayLength>
        Day Length: {data.dayLength}
      </DayLength>
    </WidgetContainer>
  )
}