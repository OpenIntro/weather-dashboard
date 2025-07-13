# Weather Dashboard

A modern, responsive React weather dashboard built with TypeScript, styled-components, and Heroicons. This application provides a comprehensive weather monitoring interface with real-time data visualization.

## Features

- **Modern UI Design**: Clean, responsive interface with a split-screen layout
- **Real-time Weather Data**: Live weather data from OpenWeatherMap API
- **Dark Mode Support**: Toggle between light and dark themes
- **Interactive Components**: 
  - Weather cards with temperature and daily forecasts
  - Sunrise/sunset widget
  - Rainfall chart with data visualization
  - Air quality index with refresh functionality
  - Search functionality for location lookup
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **TypeScript**: Full type safety throughout the application
- **Styled Components**: Maintainable CSS-in-JS styling with theme support
- **Heroicons**: Beautiful, consistent iconography

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Styled Components** - CSS-in-JS styling
- **Vite** - Fast build tool and development server
- **Heroicons** - Beautiful SVG icons
- **Recharts** - Data visualization library

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── IconButton.tsx
│   │   ├── SearchBar.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── index.ts
│   ├── features/        # Feature-specific components
│   │   ├── Header.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── SunsetSunriseWidget.tsx
│   │   ├── RainfallChart.tsx
│   │   ├── AirQualityIndexWidget.tsx
│   │   ├── DetailedWeatherCard.tsx
│   │   └── index.ts
│   └── layouts/         # Layout components
│       ├── Sidebar.tsx
│       ├── MainContent.tsx
│       └── index.ts
├── contexts/            # React contexts
│   └── ThemeContext.tsx
├── types/               # TypeScript type definitions
│   ├── index.ts
│   └── styled.d.ts
├── utils/               # Utility functions and API services
│   ├── mockData.ts
│   └── weatherApi.ts
├── styles/              # Global styles
│   └── GlobalStyles.ts
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- OpenWeatherMap API key (free at https://openweathermap.org/api)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up your API key:
   - Copy `.env.example` to `.env`
   - Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Add your API key to the `.env` file:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Component Architecture

### Layout Components

- **Sidebar**: Navigation sidebar with icons for different sections
- **MainContent**: Main content area with responsive grid layout
- **LeftColumnWrapper/RightColumnWrapper**: Column containers for responsive layout

### Feature Components

- **Header**: Greeting and user profile section
- **WeatherCard**: Main weather display with current conditions and forecast
- **SunsetSunriseWidget**: Sunrise and sunset times with day length
- **RainfallChart**: Interactive chart showing rainfall data
- **AirQualityIndexWidget**: Air quality metrics with refresh functionality
- **DetailedWeatherCard**: Detailed weather metrics in the right column

### Common Components

- **Card**: Reusable card container with consistent styling
- **Button**: Configurable button component with multiple variants
- **IconButton**: Icon-only button component
- **SearchBar**: Search input with clear and search functionality

## Styling

The application uses styled-components for maintainable CSS-in-JS styling with:

- **Color Scheme**: Light blue (#EBF5FF) background with orange (#FFC107) accents
- **Typography**: Inter font family with consistent sizing
- **Spacing**: 16px and 24px spacing system
- **Shadows**: Subtle shadows for depth and elevation
- **Responsive Design**: Mobile-first approach with breakpoints

## Data Structure

The application uses TypeScript interfaces for type safety:

- **WeatherData**: Current weather conditions
- **DailyForecast**: Daily weather forecasts
- **SunriseSunsetData**: Sunrise/sunset times
- **RainfallData**: Rainfall amounts and probabilities
- **AirQualityData**: Air quality metrics
- **LocationData**: Location information
- **UserData**: User preferences and profile

## API Integration

The dashboard now integrates with the OpenWeatherMap API to provide real-time weather data:

- **Current Weather**: Temperature, conditions, humidity, wind speed, pressure, visibility
- **5-Day Forecast**: Daily high/low temperatures and conditions
- **Sunrise/Sunset**: Daily sunrise and sunset times with day length
- **Rainfall Data**: Precipitation amounts and probabilities
- **Air Quality**: Air quality index and pollutant levels

### API Setup

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. Add your API key to the `.env` file
3. The app will automatically fetch live weather data for any city you search

## Future Enhancements

- User authentication and preferences
- Weather alerts and notifications
- Historical weather data
- Multiple location support
- Weather maps integration
- Unit conversion (Celsius/Fahrenheit, km/h/mph)
- Weather radar and satellite imagery

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.