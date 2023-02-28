import './App.css';
import "./components/architectureComponents/ArchitectureComponents.css"
import AnalyticsSection from './components/sections/AnalyticsSection';
import CoreFeaturesSection from './components/sections/CoreFeaturesSection';
import EmailSection from './components/sections/EmailSection';
import FaqSection from './components/sections/FaqSection';
import FooterSection from './components/sections/FooterSection';
import HeroSection from './components/sections/HeroSection';
import NavSection from './components/sections/NavSection';
import PricingCard from './components/sections/PricingCard';
import PricingSection from './components/sections/PricingSection';
import RevenueSection from './components/sections/RevenueSection';
import SuperPowerSection from './components/sections/SuperPowerSection';
import TeamsSection from './components/sections/TeamsSection';



function App() {
  return (
    <div className="App">
      <NavSection/>
      <HeroSection/>
      <CoreFeaturesSection/>
      <RevenueSection/>
      <TeamsSection/>
      <AnalyticsSection/>
      <EmailSection/>
      <PricingSection/>
      <FaqSection/>
      <SuperPowerSection/>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
