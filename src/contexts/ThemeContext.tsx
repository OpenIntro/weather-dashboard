import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Theme {
  name: 'light' | 'dark'
  colors: {
    primary: string
    secondary: string
    background: string
    surface: string
    text: string
    textSecondary: string
    border: string
    shadow: string
    cardBackground: string
    cardShadow: string
    success: string
    warning: string
    error: string
    info: string
  }
}

const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#3B82F6',
    secondary: '#64748B',
    background: '#EBF5FF',
    surface: '#FFFFFF',
    text: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    shadow: 'rgba(0, 0, 0, 0.1)',
    cardBackground: '#FFFFFF',
    cardShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6'
  }
}

const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#60A5FA',
    secondary: '#94A3B8',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F1F5F9',
    textSecondary: '#94A3B8',
    border: '#334155',
    shadow: 'rgba(0, 0, 0, 0.3)',
    cardBackground: '#1E293B',
    cardShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    info: '#60A5FA'
  }
}

interface ThemeContextType {
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const theme = isDark ? darkTheme : lightTheme

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const value: ThemeContextType = {
    theme,
    isDark,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}