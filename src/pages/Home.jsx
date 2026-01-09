import Hero from '../components/Hero/Hero.jsx';
import InsightsSection from '../components/InsightsSection/InsightsSection.jsx';
import FloatingLogos from '../components/FloatingLogos/FloatingLogos.jsx';
import NewGridTestimonialsSection from '../components/NewGridTestimonialsSection/NewGridTestimonialsSection.jsx';
import AutonomousChatSection from '../components/AutonomousChatSection/AutonomousChatSection.jsx';
import AuditSection from '../components/AuditSection/AuditSection.jsx';
import AIMarketerSection from '../components/AIMarketerSection/AIMarketerSection.jsx';
import OrangeSection from '../components/OrangeSection/OrangeSection.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <InsightsSection />
      <FloatingLogos />
      <NewGridTestimonialsSection />
      <AutonomousChatSection />
      <AuditSection />
      <AIMarketerSection />
      <OrangeSection />
    </>
  );
};

export default Home;
