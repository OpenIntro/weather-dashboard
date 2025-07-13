import styled from 'styled-components'

interface IconButtonProps {
  icon: React.ComponentType<any>
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
  title?: string
}

const StyledIconButton = styled.button<Omit<IconButtonProps, 'icon' | 'children'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease-in-out;
  opacity: ${props => props.disabled ? 0.6 : 1};

  ${props => {
    switch (props.size) {
      case 'small':
        return `
          width: 32px;
          height: 32px;
          svg {
            width: 16px;
            height: 16px;
          }
        `
      case 'large':
        return `
          width: 48px;
          height: 48px;
          svg {
            width: 24px;
            height: 24px;
          }
        `
      default:
        return `
          width: 40px;
          height: 40px;
          svg {
            width: 20px;
            height: 20px;
          }
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
      case 'ghost':
        return `
          background: transparent;
          color: #666;
          &:hover:not(:disabled) {
            background: rgba(0, 0, 0, 0.05);
            color: #333;
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

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon: Icon, 
  onClick, 
  size = 'medium', 
  variant = 'primary', 
  disabled = false,
  title,
  ...props 
}) => {
  return (
    <StyledIconButton
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      title={title}
      {...props}
    >
      <Icon />
    </StyledIconButton>
  )
}