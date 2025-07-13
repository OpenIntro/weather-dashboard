import React, { useState } from 'react'
import { ThemeProvider } from '@contexts/ThemeContext'
import { GlobalStyles } from '@styles/GlobalStyles'
import { Sidebar, MainContent, LeftColumnWrapper, RightColumnWrapper } from '@layouts'
import { Header, WeatherCard, SunsetSunriseWidget, RainfallChart, AirQualityIndexWidget, DetailedWeatherCard } from '@features'
import { SearchBar, Card, ThemeToggle } from '@common'
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
    <ThemeProvider>
      <GlobalStyles />
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
            
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <ThemeToggle />
              </div>
            </Card>
          </RightColumnWrapper>
        </MainContent>
      </div>
    </ThemeProvider>
  )
}

export default App