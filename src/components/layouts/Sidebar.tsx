import styled from 'styled-components'
import { 
  HomeIcon, 
  MapPinIcon, 
  ChartBarIcon, 
  Cog6ToothIcon,
  BellIcon,
  UserIcon
} from '@heroicons/react/24/outline'

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const SidebarContainer = styled.aside`
  width: 80px;
  height: 100vh;
  background: white;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`

const SidebarItem = styled.button<{ active: boolean }>`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background: ${props => props.active ? 'rgba(255, 193, 7, 0.2)' : 'transparent'};
  color: ${props => props.active ? '#FFC107' : '#666'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => props.active ? 'rgba(255, 193, 7, 0.3)' : 'rgba(0, 0, 0, 0.05)'};
    transform: translateY(-1px);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

const SidebarDivider = styled.div`
  width: 32px;
  height: 1px;
  background: #e0e0e0;
  margin: 16px 0;
`

const sidebarItems = [
  { id: 'dashboard', icon: HomeIcon, label: 'Dashboard' },
  { id: 'location', icon: MapPinIcon, label: 'Location' },
  { id: 'analytics', icon: ChartBarIcon, label: 'Analytics' },
  { id: 'notifications', icon: BellIcon, label: 'Notifications' },
  { id: 'settings', icon: Cog6ToothIcon, label: 'Settings' },
  { id: 'profile', icon: UserIcon, label: 'Profile' },
]

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <SidebarContainer>
      {sidebarItems.map((item, index) => (
        <div key={item.id}>
          <SidebarItem
            active={activeSection === item.id}
            onClick={() => onSectionChange(item.id)}
            title={item.label}
          >
            <item.icon />
          </SidebarItem>
          {index === 2 && <SidebarDivider />}
        </div>
      ))}
    </SidebarContainer>
  )
}