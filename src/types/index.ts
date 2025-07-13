export interface WeatherData {
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  windDirection: string
  pressure: number
  visibility: number
  uvIndex: number
}

export interface DailyForecast {
  day: string
  date: string
  high: number
  low: number
  condition: string
  icon: string
}

export interface SunriseSunsetData {
  sunrise: string
  sunset: string
  dayLength: string
}

export interface RainfallData {
  day: string
  amount: number
  probability: number
}

export interface AirQualityData {
  index: number
  category: string
  pm25: number
  pm10: number
  o3: number
  no2: number
  co: number
  so2: number
}

export interface LocationData {
  city: string
  country: string
  latitude: number
  longitude: number
  timezone: string
}

export interface UserData {
  name: string
  avatar: string
  preferences: {
    temperatureUnit: 'celsius' | 'fahrenheit'
    windSpeedUnit: 'kmh' | 'mph'
    language: string
  }
}

import React from 'react'

export interface SidebarItem {
  id: string
  icon: React.ComponentType<any>
  label: string
  active: boolean
}