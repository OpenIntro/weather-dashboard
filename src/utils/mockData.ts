import { 
  WeatherData, 
  DailyForecast, 
  SunriseSunsetData, 
  RainfallData, 
  AirQualityData, 
  LocationData, 
  UserData 
} from '@types'

export const mockWeatherData: WeatherData = {
  temperature: 22.5,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  windDirection: 'NE',
  pressure: 1013,
  visibility: 10,
  uvIndex: 6
}

export const mockDailyForecast: DailyForecast[] = [
  { day: 'Mon', date: '2024-01-08', high: 24, low: 18, condition: 'Sunny', icon: 'sun' },
  { day: 'Tue', date: '2024-01-09', high: 26, low: 20, condition: 'Partly Cloudy', icon: 'cloud-sun' },
  { day: 'Wed', date: '2024-01-10', high: 23, low: 17, condition: 'Rainy', icon: 'cloud-rain' },
  { day: 'Thu', date: '2024-01-11', high: 25, low: 19, condition: 'Sunny', icon: 'sun' },
  { day: 'Fri', date: '2024-01-12', high: 27, low: 21, condition: 'Clear', icon: 'sun' },
  { day: 'Sat', date: '2024-01-13', high: 24, low: 18, condition: 'Partly Cloudy', icon: 'cloud-sun' },
  { day: 'Sun', date: '2024-01-14', high: 22, low: 16, condition: 'Rainy', icon: 'cloud-rain' }
]

export const mockSunriseSunsetData: SunriseSunsetData = {
  sunrise: '07:15',
  sunset: '17:45',
  dayLength: '10h 30m'
}

export const mockRainfallData: RainfallData[] = [
  { day: 'Mon', amount: 0, probability: 10 },
  { day: 'Tue', amount: 2, probability: 30 },
  { day: 'Wed', amount: 15, probability: 80 },
  { day: 'Thu', amount: 0, probability: 5 },
  { day: 'Fri', amount: 0, probability: 10 },
  { day: 'Sat', amount: 5, probability: 40 },
  { day: 'Sun', amount: 12, probability: 70 }
]

export const mockAirQualityData: AirQualityData = {
  index: 45,
  category: 'Good',
  pm25: 12,
  pm10: 25,
  o3: 35,
  no2: 18,
  co: 0.8,
  so2: 5
}

export const mockLocationData: LocationData = {
  city: 'Lagos',
  country: 'Nigeria',
  latitude: 6.5244,
  longitude: 3.3792,
  timezone: 'Africa/Lagos'
}

export const mockUserData: UserData = {
  name: 'Feranmi',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  preferences: {
    temperatureUnit: 'celsius',
    windSpeedUnit: 'kmh',
    language: 'en'
  }
}