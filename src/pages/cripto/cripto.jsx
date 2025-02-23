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
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Cripto = () => {
  const form = useRef(null);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert(
            'Encomenda Garantida! Cheque sua caixa de entrada ou spam para confirmação.',
          );
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Algo deu errado... Tente novamente com um email válido!');
          console.log('FAILED...', error.text);
        },
      );
    form.current.reset();
  }

  return (
    <OrderSection>
      <ImageContainer>
        <StyledImg src="images/caneta-sale.png" alt="Caneta" />
      </ImageContainer>
      <FormContainer>
        <CallToAction>Entre em contato para garantir a sua!</CallToAction>

        <StyledForm ref={form} onSubmit={sendEmail}>
          <FormGroup>
            <Label>Nome</Label>
            <Input
              type="text"
              id="name"
              name="user_name"
              placeholder="Seu nome"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              id="email"
              name="user_email"
              placeholder="seu@email.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Envie uma mensagem</Label>
            <Input
              type="text"
              id="message"
              name="user_message"
              placeholder="A melhor caneta de todas..."
            />
          </FormGroup>
          <SubmitButton type="submit">Encomendar</SubmitButton>
        </StyledForm>
      </FormContainer>
    </OrderSection>
  );
};

export default Cripto;
