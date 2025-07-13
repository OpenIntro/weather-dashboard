import styled from 'styled-components'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  placeholder?: string
  disabled?: boolean
}

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 48px 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  background: white;
  transition: all 0.2s ease-in-out;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #FFC107;
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.1);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #999;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`

const ClearButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #666;
    background: rgba(0, 0, 0, 0.05);
  }
`

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Search for a city...',
  disabled = false,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  const handleClear = () => {
    onChange('')
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
      />
      <SearchIcon>
        {value && (
          <ClearButton onClick={handleClear} title="Clear search">
            <XMarkIcon width={16} height={16} />
          </ClearButton>
        )}
        <MagnifyingGlassIcon 
          width={20} 
          height={20} 
          onClick={onSearch}
          style={{ cursor: 'pointer' }}
        />
      </SearchIcon>
    </SearchContainer>
  )
}