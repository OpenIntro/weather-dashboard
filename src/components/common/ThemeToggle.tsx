import React from 'react'
import styled from 'styled-components'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@contexts/ThemeContext'

const ToggleContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${props => props.theme.colors.cardShadow};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px ${props => props.theme.colors.shadow};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease-in-out;
  }
  
  &:hover svg {
    transform: rotate(15deg);
  }
`

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <ToggleContainer onClick={toggleTheme} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </ToggleContainer>
  )
}

export default ThemeToggle