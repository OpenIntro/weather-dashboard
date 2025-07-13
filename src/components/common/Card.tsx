import styled from 'styled-components'

interface CardProps {
  children: React.ReactNode
  padding?: string
  margin?: string
  height?: string
  width?: string
  onClick?: () => void
  cursor?: string
}

const StyledCard = styled.div<Omit<CardProps, 'children'>>`
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: ${props => props.padding || '24px'};
  margin: ${props => props.margin || '0'};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  cursor: ${props => props.cursor || 'default'};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    ${props => props.onClick && `
      transform: translateY(-2px);
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
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