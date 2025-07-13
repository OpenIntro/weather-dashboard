import styled from 'styled-components'
import { Theme } from '@contexts/ThemeContext'

interface CardProps {
  children: React.ReactNode
  padding?: string
  margin?: string
  height?: string
  width?: string
  onClick?: () => void
  cursor?: string
}

const StyledCard = styled.div<Omit<CardProps, 'children'> & { theme: Theme }>`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 10px;
  box-shadow: ${props => props.theme.colors.cardShadow};
  padding: ${props => props.padding || '24px'};
  margin: ${props => props.margin || '0'};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  cursor: ${props => props.cursor || 'default'};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    ${(props: any) => props.onClick && `
      transform: translateY(-2px);
      box-shadow: 0px 6px 12px ${props.theme.colors.shadow};
    `}
  }
`

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <StyledCard {...props}>
      {children}
    </StyledCard>
  )
}