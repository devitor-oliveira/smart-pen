import { useRef } from 'react';
import Footer from './components/Footer/footer';
import Cripto from './pages/cripto/cripto';
import Hero from './pages/Hero/hero';
import { Sales } from './pages/Sales/sales';
import { HeaderContainer, Nav, NavBuy, NavItem } from './styles';

function App() {
  // Referências para as seções
  const heroRef = useRef(null);
  const salesRef = useRef(null);
  const criptoRef = useRef(null);

  // Função para rolar até a seção
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <HeaderContainer>
        {/* <Logo /> */}
        <Nav>
          <NavItem onClick={() => scrollToSection(heroRef)}>Home</NavItem>
          <NavItem onClick={() => scrollToSection(salesRef)}>Relatos</NavItem>
          <NavBuy onClick={() => scrollToSection(criptoRef)}>Encomende</NavBuy>
        </Nav>
      </HeaderContainer>

      {/* Seções com as referências */}
      <div ref={heroRef}>
        <Hero arg={criptoRef} />
      </div>

      <div ref={salesRef}>
        <Sales />
      </div>

      <div ref={criptoRef}>
        <Cripto />
      </div>

      <Footer />
    </>
  );
}

export default App;
