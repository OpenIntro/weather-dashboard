import React, { useState } from 'react'
import { Sidebar, MainContent, LeftColumnWrapper, RightColumnWrapper } from '@layouts'
import { Header, WeatherCard, SunsetSunriseWidget, RainfallChart, AirQualityIndexWidget, DetailedWeatherCard } from '@features'
import { SearchBar, Card } from '@common'
import { 
  mockWeatherData, 
  mockDailyForecast, 
  mockSunriseSunsetData, 
  mockRainfallData, 
  mockAirQualityData, 
  mockLocationData, 
  mockUserData 
} from '@utils/mockData'

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [searchValue, setSearchValue] = useState('')
  const [isLoadingAirQuality, setIsLoadingAirQuality] = useState(false)

  const handleSearch = () => {
    // In a real app, this would trigger a weather API call
    console.log('Searching for:', searchValue)
  }

  const handleRefreshAirQuality = () => {
    setIsLoadingAirQuality(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoadingAirQuality(false)
    }, 2000)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <MainContent>
        <LeftColumnWrapper>
          <Header user={mockUserData} />
          
          <Card>
            <WeatherCard 
              weather={mockWeatherData}
              forecast={mockDailyForecast}
              location={mockLocationData}
            />
          </Card>
          
          <Card>
            <SunsetSunriseWidget data={mockSunriseSunsetData} />
          </Card>
          
          <Card>
            <RainfallChart data={mockRainfallData} />
          </Card>
          
          <Card>
            <AirQualityIndexWidget 
              data={mockAirQualityData}
              onRefresh={handleRefreshAirQuality}
              isLoading={isLoadingAirQuality}
            />
          </Card>
        </LeftColumnWrapper>
        
        <RightColumnWrapper>
          <Card>
            <SearchBar 
              value={searchValue}
              onChange={setSearchValue}
              onSearch={handleSearch}
            />
          </Card>
          
          <Card>
            <DetailedWeatherCard weather={mockWeatherData} />
          </Card>
        </RightColumnWrapper>
      </MainContent>
    </div>
  )
}

export default App