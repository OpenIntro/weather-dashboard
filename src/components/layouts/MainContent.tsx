import styled from 'styled-components'

interface MainContentProps {
  children: React.ReactNode
}

const MainContainer = styled.main`
  margin-left: 80px;
  padding: 24px;
  min-height: 100vh;
  background: #EBF5FF;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 16px;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <MainContainer>
      <ContentGrid>
        {children}
      </ContentGrid>
    </MainContainer>
  )
}

export const LeftColumnWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <LeftColumn>{children}</LeftColumn>
)

export const RightColumnWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <RightColumn>{children}</RightColumn>
)