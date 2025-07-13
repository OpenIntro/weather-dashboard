import styled from 'styled-components'
import { UserData } from '@types'

interface HeaderProps {
  user: UserData
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const GreetingSection = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #FFC107;
`

const getGreeting = (): string => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 17) return 'Good Afternoon'
  return 'Good Evening'
}

const getFormattedDate = (): string => {
  const date = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  return date.toLocaleDateString('en-US', options)
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <HeaderContainer>
      <GreetingSection>
        <h1>{getGreeting()}, {user.name}</h1>
        <p>{getFormattedDate()}</p>
      </GreetingSection>
      <ProfileSection>
        <ProfileImage 
          src={user.avatar} 
          alt={`${user.name}'s profile`}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
          }}
        />
      </ProfileSection>
    </HeaderContainer>
  )
}