import {
  OrderSection,
  ImageContainer,
  StyledImg,
  FormContainer,
  StyledForm,
  FormGroup,
  SubmitButton,
  Label,
  Input,
} from './style';
import CallToAction from '../../components/CTA/CallToAction';

const Cripto = () => {
  return (
    <OrderSection>
      <ImageContainer>
        <StyledImg src="images/caneta-sale.png" alt="Caneta" />
      </ImageContainer>
      <FormContainer>
        <CallToAction>Entre em contato para garantir a sua!</CallToAction>

        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label>Nome</Label>
            <Input
              type="text"
              id="name"
              name="nome"
              placeholder="Seu nome"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Envie uma mensagem</Label>
            <Input type="text" name="Mensagem" />
          </FormGroup>
          <SubmitButton>Encomendar</SubmitButton>
        </StyledForm>
      </FormContainer>
    </OrderSection>
  );
};

export default Cripto;
