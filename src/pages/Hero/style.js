import styled from 'styled-components';
import HeroBgImage from '../../assets/caneta-hero.png';

export const HeroSection = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${HeroBgImage});
  background-size: auto 100%; /* Mantém a altura em 100% sem distorcer */
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px); /* Dá um efeito de integração com o fundo */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  width: 100%;
  /* max-width: 800px; */
  padding: 5rem 1rem 2rem 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) =>
    theme.colors.surface}CC; /* Transparência suave */

  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px); /* Integra melhor com o fundo */
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;
`;

export const HeroButton = styled.a`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;
