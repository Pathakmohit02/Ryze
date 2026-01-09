import "./About.css";
import Hero from "../components/Hero/Hero";
import FloatingLogos from "../components/FloatingLogos/FloatingLogos";
import OrangeSection from "../components/OrangeSection/OrangeSection";
import AdsManagerUI from "../components/AdsManagerUI/AdsManagerUI";
import StorySection from "../components/StorySection/StorySection";
import AutomationSection from "../components/AutomationSection/AutomationSection";




const About = () => {
  return (
    <>
 <Hero
  titleLine1="BUILT FOR"
  highlightText="MODERN"
  titleLine2="MARKETERS"
  subtitle="Our mission is to simplify marketing with AI"
  showEmail={true}
/>
<FloatingLogos />
<AdsManagerUI />
<StorySection />
<AutomationSection />

<OrangeSection />
    
    </>
  );
};

export default About;
