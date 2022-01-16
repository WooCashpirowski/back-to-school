import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './Global.styles';
import HeroSection from './components/HeroSection';
import SectionTwo from './components/SectionTwo';
import CarouselSection from './components/CarouselSection';
import SliderSection from './components/SliderSection';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <HeroSection />
        <SectionTwo />
        <CarouselSection />
        <SectionFour />
        <SliderSection />
        <SectionFive />
      </>
    </ThemeProvider>
  );
}

export default App;
