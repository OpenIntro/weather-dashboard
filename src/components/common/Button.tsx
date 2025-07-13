import styled from 'styled-components'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 500;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease-in-out;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  opacity: ${props => props.disabled ? 0.6 : 1};

  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
        `
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 18px;
        `
      default:
        return `
          padding: 12px 24px;
          font-size: 16px;
        `
    }
  }}

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background: #f8f9fa;
          color: #333;
          &:hover:not(:disabled) {
            background: #e9ecef;
          }
        `
      case 'outline':
        return `
          background: transparent;
          color: #FFC107;
          border: 2px solid #FFC107;
          &:hover:not(:disabled) {
            background: #FFC107;
            color: white;
          }
        `
      default:
        return `
          background: #FFC107;
          color: white;
          &:hover:not(:disabled) {
            background: #e6ac00;
            transform: translateY(-1px);
          }
        `
    }
  }}

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  )
}