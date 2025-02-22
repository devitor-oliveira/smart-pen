import styled from 'styled-components';
import darkTheme from '../../styles/theme';

export const OrderSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) =>
    theme.colors.background}; /* Usando a cor de fundo do tema */
`;

export const ImageContainer = styled.div`
  flex: 1 1 300px;
  max-width: 500px;
`;

export const FormContainer = styled.div`
  flex: 1 1 300px;
  max-width: 500px;
  background-color: ${({ theme }) =>
    theme.colors.surface}; /* Cor de fundo para o formulário */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) =>
    theme.colors.textPrimary}; /* Usando a cor do texto principal */
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  background-color: ${({ theme }) =>
    theme.colors.surface}; /* Usando cor de fundo do tema */
  color: ${({ theme }) => theme.colors.textPrimary}; /* Cor do texto */
  border: 1px solid ${darkTheme.colors.secondary}; /* Usando cor de borda do tema */
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.primary}; /* Cor de borda no foco */
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.buttonBackground}; /* Usando cor de fundo do botão */
  color: ${({ theme }) => theme.colors.buttonText}; /* Cor do texto do botão */
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.buttonHover}; /* Cor de fundo no hover */
  }
`;
