# Weather Dashboard

A modern, responsive React weather dashboard built with TypeScript, styled-components, and Heroicons. This application provides a comprehensive weather monitoring interface with real-time data visualization.

## Features

- **Modern UI Design**: Clean, responsive interface with a split-screen layout
- **Real-time Weather Data**: Current weather conditions, forecasts, and detailed metrics
- **Interactive Components**: 
  - Weather cards with temperature and daily forecasts
  - Sunrise/sunset widget
  - Rainfall chart with data visualization
  - Air quality index with refresh functionality
  - Search functionality for location lookup
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **TypeScript**: Full type safety throughout the application
- **Styled Components**: Maintainable CSS-in-JS styling
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
├── types/               # TypeScript type definitions
│   └── index.ts
├── utils/               # Utility functions and mock data
│   └── mockData.ts
├── styles/              # Global styles
│   └── GlobalStyles.ts
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

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

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

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

## Future Enhancements

- Real weather API integration (OpenWeatherMap, WeatherAPI)
- User authentication and preferences
- Weather alerts and notifications
- Historical weather data
- Multiple location support
- Dark mode theme
- Weather maps integration
- Unit conversion (Celsius/Fahrenheit, km/h/mph)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.