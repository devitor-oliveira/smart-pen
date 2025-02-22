import styled from 'styled-components';
import LogoImage from './assets/logo.png';

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0rem 0.5rem 0rem;
  background-color: ${({ theme }) =>
    `rgba(${parseInt(theme.colors.surface.slice(1, 3), 16)}, ${parseInt(theme.colors.surface.slice(3, 5), 16)}, ${parseInt(theme.colors.surface.slice(5, 7), 16)}, 0.8)`};

  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 12px; /* Arredondamento sutil */
  overflow: hidden; /* Evita cortes irregulares */
`;

export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;
  flex: 1;
  justify-content: center;
`;

export const NavItem = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
