import styled from 'styled-components';
import darkTheme from '../../styles/theme';
export const FooterContainer = styled.footer`
  padding: 10px;
  text-align: center;
  bottom: 0;
  width: 100%;
  color: ${darkTheme.colors.textSecondary};
  background-color: ${darkTheme.colors.surface};
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;
