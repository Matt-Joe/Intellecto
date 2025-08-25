import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import ShowcaseSection from './ShowcaseSection';
import TestimonialsSection from './TestimonialsSection';
import HowItWorksSection from './HowItWorksSection';
import CallToActionSection from './CallToActionSection';

import '../../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <Navbar />

      <AboutSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CallToActionSection />

      <div className="landing-buttons">
        <button 
          onClick={() => navigate('/auth')} 
          className="get-started-button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
