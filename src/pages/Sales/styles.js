import styled from 'styled-components';

export const SalesSection = styled.section`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 40px;
  /* border: 1px solid yellow; */
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surfaceElevated};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;

  text-align: left;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ClientImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CardContent = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SponsorsLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  flex-wrap: wrap;
`;

export const SponsorLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ size }) => size || '40px'};

  svg {
    filter: ${({ theme }) => (theme.isDarkMode ? 'invert(1)' : 'none')};
  }
`;
