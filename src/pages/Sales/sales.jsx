import { FaAmazon, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import {
  SalesSection,
  CardsContainer,
  Card,
  ClientImage,
  CardTitle,
  CardDescription,
  SponsorsLine,
  SponsorLogo,
  CardContent,
} from './styles';
import { SiBmcsoftware } from 'react-icons/si';
import CallToAction from '../../components/CTA/CallToAction';

export const Sales = () => {
  return (
    <SalesSection>
      <CallToAction>
        A <strong>Smart Copy</strong> é a solução que funciona para você!
      </CallToAction>

      <CardsContainer>
        <Card>
          <ClientImage src="/images/cega.png" alt="Cliente 1" />
          <CardContent>
            <CardTitle>Mariana Oliveira</CardTitle>
            <CardDescription>
              &quot;É ótima para deficientes visuais! Agora posso assinar
              contratos duvidosos e não posso alegar que fui enganada.&quot;
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <ClientImage src="/images/idoso1.png" alt="Cliente 2" />
          <CardContent>
            <CardTitle>Seu José</CardTitle>
            <CardDescription>
              &quot;Graças a essa caneta, consegui vender minha casa para um
              estrangeiro por um preço nada justo. Muito Obrigado!&quot;
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <ClientImage src="/images/velha.png" alt="Cliente 3" />
          <CardContent>
            <CardTitle>Ana da Marmita</CardTitle>
            <CardDescription>
              &quot;A SmatCopy me ajudou a passar todos os meus bens para o meu
              cuidador, com a criptografia não posso recorrer.
              MARAVILHOSO!&quot;
            </CardDescription>
          </CardContent>
        </Card>
      </CardsContainer>

      <CallToAction>
        <p>Patrocinadores</p>
      </CallToAction>

      <SponsorsLine>
        <SponsorLogo size="50px">
          <FaGoogle />
        </SponsorLogo>
        <SponsorLogo size="50px">
          <SiBmcsoftware />
        </SponsorLogo>
        <SponsorLogo size="50px">
          <FaMicrosoft />
        </SponsorLogo>
        <SponsorLogo size="50px">
          <FaAmazon />
        </SponsorLogo>
        {/* <SponsorLogo size="50px">
          <FaFacebook />
        </SponsorLogo> */}
      </SponsorsLine>
    </SalesSection>
  );
};
