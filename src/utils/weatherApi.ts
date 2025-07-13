import axios from 'axios'
import { 
  WeatherData, 
  DailyForecast, 
  SunriseSunsetData, 
  RainfallData, 
  AirQualityData, 
  LocationData 
} from '@types'

// You'll need to get a free API key from https://openweathermap.org/api
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'your_api_key_here'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

interface OpenWeatherResponse {
  weather: Array<{
    main: string
    description: string
    icon: string
  }>
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  }
  wind: {
    speed: number
    deg: number
  }
  visibility: number
  sys: {
    sunrise: number
    sunset: number
    country: string
  }
  name: string
  coord: {
    lat: number
    lon: number
  }
}

interface ForecastResponse {
  list: Array<{
    dt: number
    main: {
      temp: number
      temp_min: number
      temp_max: number
    }
    weather: Array<{
      main: string
      description: string
      icon: string
    }>
    pop: number
    rain?: {
      '3h': number
    }
  }>
  city: {
    name: string
    country: string
    coord: {
      lat: number
      lon: number
    }
    timezone: number
  }
}

interface AirQualityResponse {
  list: Array<{
    main: {
      aqi: number
    }
    components: {
      pm2_5: number
      pm10: number
      o3: number
      no2: number
      co: number
      so2: number
    }
  }>
}

const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  const index = Math.round(degrees / 45) % 8
  return directions[index]
}

const getAQICategory = (aqi: number): string => {
  if (aqi <= 50) return 'Good'
  if (aqi <= 100) return 'Moderate'
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups'
  if (aqi <= 200) return 'Unhealthy'
  if (aqi <= 300) return 'Very Unhealthy'
  return 'Hazardous'
}

const kelvinToCelsius = (kelvin: number): number => {
  return Math.round((kelvin - 273.15) * 10) / 10
}

const kelvinToFahrenheit = (kelvin: number): number => {
  return Math.round(((kelvin - 273.15) * 9/5 + 32) * 10) / 10
}

export const weatherApi = {
  async getCurrentWeather(city: string): Promise<WeatherData> {
    try {
      const response = await axios.get<OpenWeatherResponse>(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`
      )
      
      const data = response.data
      
      return {
        temperature: kelvinToCelsius(data.main.temp),
        condition: data.weather[0].main,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        windDirection: getWindDirection(data.wind.deg),
        pressure: data.main.pressure,
        visibility: Math.round(data.visibility / 1000), // Convert m to km
        uvIndex: 6 // OpenWeatherMap doesn't provide UV index in free tier
      }
    } catch (error) {
      console.error('Error fetching current weather:', error)
      throw new Error('Failed to fetch weather data')
    }
  },

  async getLocationData(city: string): Promise<LocationData> {
    try {
      const response = await axios.get<OpenWeatherResponse>(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`
      )
      
      const data = response.data
      
      return {
        city: data.name,
        country: data.sys.country,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        timezone: 'UTC' // OpenWeatherMap doesn't provide timezone in free tier
      }
    } catch (error) {
      console.error('Error fetching location data:', error)
      throw new Error('Failed to fetch location data')
    }
  },

  async getForecast(city: string): Promise<DailyForecast[]> {
    try {
      const response = await axios.get<ForecastResponse>(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}`
      )
      
      const data = response.data
      const dailyData = data.list.filter((item, index) => index % 8 === 0) // Get one reading per day
      
      return dailyData.slice(0, 7).map((item: any, index: number) => {
        const date = new Date(item.dt * 1000)
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        
        return {
          day: dayNames[date.getDay()],
          date: date.toISOString().split('T')[0],
          high: kelvinToCelsius(item.main.temp_max),
          low: kelvinToCelsius(item.main.temp_min),
          condition: item.weather[0].main,
          icon: this.getWeatherIcon(item.weather[0].main)
        }
      })
    } catch (error) {
      console.error('Error fetching forecast:', error)
      throw new Error('Failed to fetch forecast data')
    }
  },

  async getSunriseSunset(city: string): Promise<SunriseSunsetData> {
    try {
      const response = await axios.get<OpenWeatherResponse>(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`
      )
      
      const data = response.data
      const sunrise = new Date(data.sys.sunrise * 1000)
      const sunset = new Date(data.sys.sunset * 1000)
      
      const dayLengthMs = sunset.getTime() - sunrise.getTime()
      const hours = Math.floor(dayLengthMs / (1000 * 60 * 60))
      const minutes = Math.floor((dayLengthMs % (1000 * 60 * 60)) / (1000 * 60))
      
      return {
        sunrise: sunrise.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        sunset: sunset.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        dayLength: `${hours}h ${minutes}m`
      }
    } catch (error) {
      console.error('Error fetching sunrise/sunset:', error)
      throw new Error('Failed to fetch sunrise/sunset data')
    }
  },

  async getRainfallData(city: string): Promise<RainfallData[]> {
    try {
      const response = await axios.get<ForecastResponse>(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}`
      )
      
      const data = response.data
      const dailyData = data.list.filter((item, index) => index % 8 === 0)
      
      return dailyData.slice(0, 7).map((item, index) => {
        const date = new Date(item.dt * 1000)
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        
        return {
          day: dayNames[date.getDay()],
          amount: item.rain ? Math.round(item.rain['3h']) : 0,
          probability: Math.round(item.pop * 100)
        }
      })
    } catch (error) {
      console.error('Error fetching rainfall data:', error)
      throw new Error('Failed to fetch rainfall data')
    }
  },

  async getAirQuality(lat: number, lon: number): Promise<AirQualityData> {
    try {
      const response = await axios.get<AirQualityResponse>(
        `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      
      const data = response.data.list[0]
      
      return {
        index: data.main.aqi,
        category: getAQICategory(data.main.aqi),
        pm25: Math.round(data.components.pm2_5),
        pm10: Math.round(data.components.pm10),
        o3: Math.round(data.components.o3),
        no2: Math.round(data.components.no2),
        co: Math.round(data.components.co * 10) / 10,
        so2: Math.round(data.components.so2)
      }
    } catch (error) {
      console.error('Error fetching air quality:', error)
      throw new Error('Failed to fetch air quality data')
    }
  },

  getWeatherIcon(condition: string): string {
    const iconMap: { [key: string]: string } = {
      'Clear': 'sun',
      'Clouds': 'cloud',
      'Rain': 'cloud-rain',
      'Drizzle': 'cloud-rain',
      'Thunderstorm': 'cloud-lightning',
      'Snow': 'cloud-snow',
      'Mist': 'cloud-fog',
      'Smoke': 'cloud-fog',
      'Haze': 'cloud-fog',
      'Dust': 'cloud-fog',
      'Fog': 'cloud-fog',
      'Sand': 'cloud-fog',
      'Ash': 'cloud-fog',
      'Squall': 'cloud-wind',
      'Tornado': 'wind'
    }
    
    return iconMap[condition] || 'cloud'
  }
}