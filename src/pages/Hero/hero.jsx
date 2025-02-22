import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
} from './style';

const Hero = ({ arg }) => {
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Bem-vindo à Smart Copy</HeroTitle>
        <HeroSubtitle>A caneta inteligente que resolve tudo!</HeroSubtitle>
        <HeroButton onClick={() => scrollToSection(arg)}>
          Compre Agora
        </HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
